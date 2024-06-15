var API_key = "RGAPI-d80a9254-b07f-4975-8cdb-26e44b10806f";
var summoner_name= "";
var summoner_tag ="";
var na_puuid_url = "https://americas.api.riotgames.com";


function get_puuid()
{
    summoner_name = document.getElementById("summoner_name").value;
    summoner_tag = document.getElementById("summoner_tag").value;
    console.log(summoner_name);
    console.log(summoner_tag);
    data();
    
}

async function data()
{

    var puuidUrl = "/riot/account/v1/accounts/by-riot-id/"+summoner_name+"/"+summoner_tag;
    var fullSummonerNameUrl = na_puuid_url+puuidUrl+"?api_key="+API_key;
    console.log(fullSummonerNameUrl);
    const summonerPuuid = await fetch(fullSummonerNameUrl);
    console.log(summonerPuuid);
    const summonerPuuid2 = await summonerPuuid.jsonp();
    console.log(summonerPuuid2);

    var bigpuuid = summonerPuuid2.puuid;
    console.log(bigpuuid);

    document.getElementById("puuiddisplay").innerHTML = bigpuuid;
}




