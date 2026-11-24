/* Advanced FrontEnd - jQuery helper for Moodle-like LMS
 * Chạy trong Console trên trang môn học đã đăng nhập.
 * Yêu cầu: jQuery đã được tải trên trang.
 */
(function ($) {
  "use strict";
  if (!$) {
    console.error("Không tìm thấy jQuery. Hãy tải jQuery trước khi chạy script.");
    return;
  }

  const assignmentSelector = ".modtype_assign";
  const topicSelector = [
    ".course-section",
    "li.section",
    "section.course-section",
    "[data-sectionid]"
  ].join(",");

  const clean = value => (value || "").replace(/\s+/g, " ").trim();

  function getAssignmentName($assignment) {
    const $name = $assignment.find(".instancename").first();
    return clean($name.text()) || clean($assignment.find("a").first().text()) || "Bài tập chưa có tên";
  }

  function getDeadline($assignment) {
    const candidates = [
      ".activity-dates", ".activity-dates small", ".due-date",
      ".submissionduedate", ".submissionduedate + div",
      "[data-region='activity-dates']", ".activity-info"
    ];
    for (const selector of candidates) {
      const text = clean($assignment.find(selector).text());
      if (text && /(due|deadline|hạn|nộp|đến|ngày)/i.test(text)) return text;
    }
    const text = clean($assignment.text());
    const match = text.match(/(?:Due|Deadline|Hạn nộp|Ngày hết hạn)\s*:?\s*[^.]{0,100}/i);
    return match ? clean(match[0]) : "Không tìm thấy deadline trên trang";
  }

  function collectAssignments($scope) {
    return $scope.find(assignmentSelector).addBack(assignmentSelector).map(function () {
      const $item = $(this);
      return { name: getAssignmentName($item), deadline: getDeadline($item), element: this };
    }).get();
  }

  // Yêu cầu 1: in bài nộp thứ 5 (thứ tự DOM bắt đầu từ 1).
  const allAssignments = collectAssignments($(document));
  console.group("ADVANCED FRONTEND — LMS ASSIGNMENTS");
  if (allAssignments.length >= 5) {
    console.log("Bài nộp thứ 5:", allAssignments[4].name);
    console.log("Deadline:", allAssignments[4].deadline);
  } else {
    console.warn(`Trang hiện có ${allAssignments.length} bài tập; chưa đủ 5 bài.`);
  }

  // Yêu cầu 2: liệt kê chủ đề, bài tập và deadline.
  const topics = [];
  $(topicSelector).each(function (index) {
    const $topic = $(this);
    // Chỉ lấy section có nội dung hoạt động, tránh lặp section lồng nhau.
    if ($topic.parents(topicSelector).length) return;
    const heading = clean($topic.find(".sectionname, .section-title, h3, h4").first().text()) || `Chủ đề ${index + 1}`;
    const assignments = collectAssignments($topic);
    topics.push({
      topic: heading,
      hasAssignment: assignments.length > 0,
      assignments: assignments.map(a => ({ name: a.name, deadline: a.deadline }))
    });
  });

  if (!topics.length) {
    console.warn("Không nhận diện được selector chủ đề. In danh sách bài tập tìm thấy để đối chiếu:", allAssignments);
  } else {
    console.table(topics.map(t => ({
      "Chủ đề": t.topic,
      "Có bài tập?": t.hasAssignment ? "Có" : "Không",
      "Tên bài tập": t.assignments.map(a => a.name).join("; ") || "—",
      "Deadline": t.assignments.map(a => a.deadline).join("; ") || "—"
    })));
  }
  console.log("Tổng số bài tập:", allAssignments.length);
  console.groupEnd();

  window.lmsAssignmentReport = { fifthAssignment: allAssignments[4] || null, assignments: allAssignments, topics };
})(window.jQuery);
