// 36 kártya, 18 számpárral
// kattintásra akártya megmutatja a számát
// kell egy 36 elemű lista 1-18ig minden elemből 2 db-vel
// minden div-et meg kell különböztetni és egy számot hozzárendelni
// el kell tároln, hogy hány kártya van felfordítva
// kell egy függvény ami ellenörzi, hogy hány kártya van felfordítva és hogy milyen sorrendben és milyen számmal
// - egy ami ellenőrzi, hogy kettő van-e felfordítva
// - egy ami ellenőrzi, hogy a második és az első száma egyenlőek-e
// - egy ami kékre színezi őket és kattinthatatlanná teszi 
// el kell tárolni, hogy hány kártya maradt
// ha a kártyák elfogytak kihirdeti a győzelmed és új játszmát ajánl

let diveklistája = document.querySelectorAll('div') // tárolja a kártyákat
let szamlista = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18]// tárolja a számokat
let jelenleg_felfordítva // tárolja a felfordítottakat
let számláló = 36 // tárolja hogy mennyi kártya nem kék
function kiosztás(lapokra_kerülő_számok) // kiossza a diveknek a számát
{
    let l = [...lapokra_kerülő_számok]
    for (const valamelyik of diveklistája) 
    {
        
    }
}
function fordul_a_lap(felfordítandó)
{
    // megmutatja a lap számát
}
function a_második_e(ellenörzendő, lista_amiben_ellenőrizzűk)
{
    // ellenőrzi, hogy második-e
}
function megegyezik_e(első, második)
{
    // megnézi, hogy a két elem ugyanazt a számot birtokolja és ha nem visszafordítja, de ha igen akkor félreteszi őket
}
function visszafordít(fordítandó)
{
    // csak simán visszafordítja
}
function félretesz(félretevendő)
{
    számláló = számláló-2;
    // kékre színezi és kattinthatatlanná teszi
}
function nyertél_e(nem_kékek)
