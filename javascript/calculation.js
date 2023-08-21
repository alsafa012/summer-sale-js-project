let initialPrice = 0;

function clickHandler(target) {
     const blankDiv = document.getElementById("blank-div");
     const totalP = document.getElementById('totalRemainingBalance')
     const box1Price = target.childNodes[9].innerText.split(" ")[0];

     const count = blankDiv.childElementCount;
     const boxText = target.childNodes[3].innerText;
     const p = document.createElement("p");
     p.innerText = `${count + 1}. ${boxText}`;
     blankDiv.appendChild(p);

     initialPrice = parseFloat(initialPrice) + parseFloat(box1Price);
     totalP.innerText = initialPrice;

     const showPurchaseBtn = document.getElementById("Purchase-Btn");
     if (initialPrice > "0") {
          showPurchaseBtn.removeAttribute("disabled");
     } else {
          showPurchaseBtn.setAttribute("disabled", true);
     }
     const showApplyBtn = document.getElementById("apply-btn");
     if (initialPrice >= "200") {
          showApplyBtn.removeAttribute("disabled");
     } else {
          showApplyBtn.setAttribute("disabled", true);
     }

     const totalPrice = (document.getElementById("totalPrice").innerText =
          initialPrice.toFixed(2));

}
function apply() {
     const inp = document.getElementById("input-field").value;
     const totalPrice = (document.getElementById("totalPrice").innerText =
          initialPrice.toFixed(2));

     const enableApplyBtn = document.getElementById("apply-btn");
     
     

     if (initialPrice <= "200" || inp !== "SELL200") {
          discount == "00";
     }
     const totalDiscount = (20 / 100) * totalPrice;
     const discount = (document.getElementById("totalDiscount").innerText =
          totalDiscount.toFixed(2));
     const total = initialPrice - discount;

     const totalRemainingBalance = (document.getElementById(
          "totalRemainingBalance"
     ).innerText = total.toFixed(2));
     
}

function modalBtn() {
     document.getElementById("input-field").value = "";
     document.getElementById("totalPrice").innerText = "00";
     document.getElementById("totalDiscount").innerText = "00";
     document.getElementById("totalRemainingBalance").innerText = "00";
    
     // window.location.href = "index.html";
}

function inputField(id) {
     const input = document.getElementById(id);
     const text = input.value;
     return text;
}

// function textField(textFld) {
//      const input1 = document.getElementById(textFld);
//      const text1 = input1.innerText;
//      return text1;
// }
