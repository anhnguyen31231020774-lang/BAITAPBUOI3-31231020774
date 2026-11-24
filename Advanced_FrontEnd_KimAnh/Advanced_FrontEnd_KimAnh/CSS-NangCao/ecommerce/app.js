// Green Market - dữ liệu demo và chức năng cửa hàng
const products = [
  {id:1,name:"Bình nước tre Green",category:"home",categoryName:"Gia dụng",price:129000,oldPrice:159000,discount:19,stock:18,rating:4.8,reviews:36,badge:"BEST",tone:"#79a66b",art:"GREEN\nBOTTLE"},
  {id:2,name:"Sữa tắm thiên nhiên",category:"care",categoryName:"Chăm sóc cá nhân",price:89000,oldPrice:109000,discount:18,stock:4,rating:4.6,reviews:21,badge:"NEW",tone:"#c18b67",art:"NATURE\nCARE"},
  {id:3,name:"Xà phòng thảo mộc",category:"care",categoryName:"Chăm sóc cá nhân",price:59000,oldPrice:69000,discount:14,stock:0,rating:4.9,reviews:52,badge:"",tone:"#8eaa79",art:"HERBAL\nSOAP"},
  {id:4,name:"Túi vải tái sử dụng",category:"home",categoryName:"Gia dụng",price:45000,oldPrice:55000,discount:18,stock:25,rating:4.7,reviews:18,badge:"NEW",tone:"#c7a76b",art:"REUSE\nBAG"},
  {id:5,name:"Trà xanh hữu cơ",category:"food",categoryName:"Thực phẩm",price:75000,oldPrice:90000,discount:17,stock:12,rating:4.5,reviews:14,badge:"",tone:"#658d55",art:"ORGANIC\nTEA"},
  {id:6,name:"Nước rửa chén sinh học",category:"home",categoryName:"Gia dụng",price:68000,oldPrice:79000,discount:14,stock:3,rating:4.4,reviews:11,badge:"",tone:"#6c9b9a",art:"BIO\nCLEAN"},
  {id:7,name:"Son dưỡng thiên nhiên",category:"care",categoryName:"Chăm sóc cá nhân",price:99000,oldPrice:119000,discount:17,stock:9,rating:4.8,reviews:27,badge:"BEST",tone:"#bd7775",art:"LIP\nBALM"},
  {id:8,name:"Hạt điều rang mộc",category:"food",categoryName:"Thực phẩm",price:115000,oldPrice:135000,discount:15,stock:15,rating:4.6,reviews:30,badge:"",tone:"#b58b5d",art:"CASHEW\nNUTS"}
];
const money = n => new Intl.NumberFormat("vi-VN").format(n) + " ₫";
let cart = [];
const productList = document.querySelector("#product-list");
const searchInput = document.querySelector("#search");
const categoryInput = document.querySelector("#category");
const sortInput = document.querySelector("#sort");

function renderProducts(){
  let list = products.filter(p => (categoryInput.value==="all" || p.category===categoryInput.value) && p.name.toLowerCase().includes(searchInput.value.trim().toLowerCase()));
  if(sortInput.value==="low") list.sort((a,b)=>a.price-b.price);
  if(sortInput.value==="high") list.sort((a,b)=>b.price-a.price);
  document.querySelector("#product-total").textContent = `${list.length} sản phẩm`;
  document.querySelector("#empty-state").hidden = list.length>0;
  productList.innerHTML = list.map(p => `
    <article class="product-card">
      <div class="product-image">
        <span class="discount">-${p.discount}%</span>${p.badge?`<span class="ribbon">${p.badge}</span>`:""}
        <div class="product-art" style="--tone:${p.tone}">${p.art}</div>
      </div>
      <div class="product-info">
        <span class="category-label">${p.categoryName}</span><h3>${p.name}</h3>
        <div class="rating" aria-label="Đánh giá ${p.rating} trên 5">★★★★★ <small>${p.rating} (${p.reviews})</small></div>
        <div class="price-line"><span class="price">${money(p.price)}</span><span class="old-price">${money(p.oldPrice)}</span></div>
        <div class="stock"><span style="width:${Math.max(0,p.stock/25*100)}%"></span></div>
        <div class="stock-label"><span>${p.stock===0?"Hết hàng":p.stock<=5?"Sắp hết hàng":"Còn hàng"}</span><span>${p.stock} sản phẩm</span></div>
        <button class="add-btn" data-add="${p.id}" ${p.stock===0?"disabled":""}>${p.stock===0?"TẠM HẾT HÀNG":"THÊM VÀO GIỎ"}</button>
      </div>
    </article>`).join("");
}
function updateCartCount(){document.querySelector("#cart-count").textContent=cart.reduce((sum,item)=>sum+item.qty,0)}
function renderCart(){
  const target=document.querySelector("#cart-items");
  if(!cart.length){target.innerHTML='<p>Giỏ hàng đang trống.</p>'}
  else target.innerHTML=cart.map(item=>`<div class="cart-row"><span>${item.name}<br><small>${money(item.price)}</small></span><span class="qty-control"><button data-minus="${item.id}" aria-label="Giảm số lượng">−</button> ${item.qty} <button data-plus="${item.id}" aria-label="Tăng số lượng">+</button></span><b>${money(item.price*item.qty)}</b></div>`).join("");
  document.querySelector("#cart-total").textContent=money(cart.reduce((s,i)=>s+i.price*i.qty,0));
  updateCartCount();
}
productList.addEventListener("click",e=>{
  const btn=e.target.closest("[data-add]"); if(!btn)return;
  const id=Number(btn.dataset.add),p=products.find(x=>x.id===id),item=cart.find(x=>x.id===id);
  if(item){if(item.qty>=p.stock){alert("Số lượng vượt quá tồn kho.");return}item.qty++}else cart.push({...p,qty:1});
  renderCart();btn.textContent="ĐÃ THÊM ✓";setTimeout(()=>{if(btn.isConnected)btn.textContent="THÊM VÀO GIỎ"},900);
});
document.querySelector("#cart-items").addEventListener("click",e=>{
  const plus=e.target.dataset.plus,minus=e.target.dataset.minus;
  if(plus){const item=cart.find(x=>x.id===Number(plus)),p=products.find(x=>x.id===Number(plus));if(item.qty<p.stock)item.qty++}
  if(minus){const item=cart.find(x=>x.id===Number(minus));item.qty--;if(item.qty<=0)cart=cart.filter(x=>x.id!==Number(minus))}
  renderCart();
});
[searchInput,categoryInput,sortInput].forEach(el=>el.addEventListener("input",renderProducts));
const modal=document.querySelector("#cart-modal");
document.querySelector("#open-cart").addEventListener("click",()=>{renderCart();modal.hidden=false});
document.querySelector("#close-cart").addEventListener("click",()=>modal.hidden=true);
modal.addEventListener("click",e=>{if(e.target===modal)modal.hidden=true});
document.querySelector("#checkout").addEventListener("click",()=>{
  const msg=document.querySelector("#cart-message");
  if(!cart.length){msg.textContent="Vui lòng thêm sản phẩm trước khi xác nhận.";return}
  msg.textContent="Đơn hàng demo đã được ghi nhận trên giao diện. Chưa có thanh toán thật.";
});
renderProducts();renderCart();
