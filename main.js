
async function boutonClick(idName) {
    // document.getElementById(idName).style.backgroundColor = "#262626";
    // await sleep(300);
    // document.getElementById(idName).style.backgroundColor = "#595959";



    document.getElementsByClassName("btn")[0].style.backgroundColor = "#262626";
    await sleep(100);
    document.getElementsByClassName("btn")[0].style.backgroundColor = "#737373";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
