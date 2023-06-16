let toanhang1 = "";
let toanhang2 = "";
let hienthi;

function buttonhander(btn) {
    const giatrivalue = btn.innerText
    const ketquainput = document.getElementById('ketquainput');
    if (isNaN(giatrivalue)) {
        if (giatrivalue == "C") {
            toanhang1 = "";
            toanhang2 = "";
            hienthi = undefined;
            ketquainput.value = "";
            return;

        }
        if (giatrivalue == "=") {
            const ketquas = perform(toanhang1, toanhang2, hienthi);
            ketquainput.value = ketquas;
            toanhang1 = "";
            toanhang2 = "";
            hienthi = undefined;
        } else {
            hienthi = giatrivalue;
        }

    } else {
        if (hienthi) {
            toanhang2 += giatrivalue;
            ketquainput.value = toanhang2;
        } else {
            toanhang1 += giatrivalue;
            ketquainput.value = toanhang1;
        }
    }

}

function perform(x, y, z) {

    x = Number(x);
    y = Number(y);
    switch (z) {
        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return x / y
    }
}