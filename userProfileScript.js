function switchWalletPanel(){

    var tabel = document.getElementById("table").style;
    var wallet = document.getElementById("wallet").style;
    var account = document.getElementById("account").style;

    if(tabel.display != "none"){

        tabel.display = 'none';
        wallet.display = 'block';

    }else if (account.display != "none"){
        account.display = 'none';
    }
    else {

        tabel.display = 'block';
        wallet.display = 'none';

    }

}

function switchAccountPanel(){

    var tabel = document.getElementById("table").style;
    var wallet = document.getElementById("wallet").style;
    var account = document.getElementById("account").style;
    
    if(tabel.display != "none"){

        tabel.display = 'none';
        account.display = 'block';

    }
    else if(wallet.display != "none"){
        wallet.display = "none";

    }
    else {

        tabel.display = 'block';
        account.display = 'none';

    }
    
}