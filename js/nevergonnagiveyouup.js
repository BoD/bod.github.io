function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function neverGonnaGiveYouUp() {
    var n = [];
    n[0] = `    tffffLfftffffffffLLffttttttftt111ttfffffftttttttt111111ttttttffff
    tfffLfttffffffLLffffttttttttttt1tfffffffffftttttt111111tfffffffff
    fttfffttfffffffffttfftttttt1t1tt11tfffffftttttt111t111111ttffffLL
    LfttttffLLLfttttftfLftttttttffffttttffffttttfftt11t111tt111ttfffL
    LLffttfLLffttfffftfLfttttttffttt11111ttttffffffftt1111tft11111ttf
    LLLfftffttttffLffftfftttttft1i;;::::;iitffffffffftt111tft1tttt1tt
    LLLfttttffftffffftfttttttff1:,,,,,,,,::itfffffffft11111111ttttttt
    LLLfttfftffffffffLLLftttttt;::,:::;;;;::1tfffftfft11111ttt1ttt1tf
    LffftfLfffttfLLffLLLfttttti;;;iii11111;:i11ttffft111111tfft11t11t
    fttttfffffttLLLLfLLLftttfti:;;;iiiiiiii;it111tt111t1111tffttfftt1
    ttttttttttttfLLLffLLfttttt1;;;;;;iiiiii;1tft11tt1111111tfftfffftt
    ffffffffttffttLLfffLfttttt11i;;;;iiiiiii1tt11tfftt11111ttt1fffttt
    ffffffffttffftffttftttttff1ii;;;;iii1iii111tt1ttttt1111t111ffttff
    fffffffttttttttttffftttttft1ii;;;ii1iii111tfft11ttt111111t1tt1tff
    fffffftttttttt11fffftttt1t111iiii;iiiii11ttffft11111111ttttttt1tt
    fttttttttffttt11tffttttttt11ttii;;;iiii11i1ffftt1111111tttt111ttt
    tttttttfffftttt11tfftttttt111t1i;;;iiii1i,,:;i1111t1111ttt111t1tf
    fffftttffffttffttttft111tt11111i;;;iiii1;,,....,:::;i11tt111tt11t
    ffffttttfffttffttttft1111111111;;;;;;;it;,...........,:it111ttt1t
    ffft111tffttfttttttt1111t1i;:;11i1i;;1t1:,,............,itt11tt1t
    ttt1ttt11ttttttftt111111i:,..:1111iii11;,...............;tt111t11
    ttttffftt111ttffftt11i;,.,...,iiii;;;;:,,...............:1ttt1111
    11ttttttttttfffffft1:,..........::::::,,,...............,1ttttt11
    11ttttttttttfffffft1:...........:;::;:..................,1tttttt1
    1ttftttfftttttffft11:...........,:::::..................,1tttft11
    1tttttttttttttttttt1;...........,::::,...................;t1t1111
    1tttttttt1tfftttttt1:...........,::::,...... ............,1111tt1
    1tttttttt1tffftttft1:...........,:::,,....................it1ttt1
    1ttttttttttffttttttt:...........,::,,.....................:111tt1
    1tftttttftttttttttt1;,:;:.......,:,,,....................,,1111t1
    1ttffffffttttfffft11ii1i:.......,:,,,.....................,1tt111
    1tttttttttttttttttti;;;;:.......,:,,,....... .............,itt111
    1111111ttttttttttt1i;;;;:.......,:,,,......................itt111
    1111111ttttttttttt1;;;;;:...... ,:,,,,.....................itt11t
    1111111tttttttttt1;:,::;,...... ,:...,.....................ittttt
    111111111tttttttt1i,.....  .... .:........................,i1tttt
    1111111111t11t11111;,....,,.... ,:::,,,...................,11tttt
    11111111111111111111iiiiii. ... .::::::,..................,11t1tt
    1111111111111111111111111:.,.....::::::,..................:111ttt
    1111111111111111111111111:::,...,::::;::,..,,.............:11tt1t`;
    n[1] = `    tffffLftttfffffffLLLfttttttftt111ttfffffftttttttt111111tttttfffff
    tfffLLttffffffLLffffttttttttttt1tffffffffffttttttt11111tfffffffff
    fttfffttfffffffffttfftttttt1tttt1ttftfffftt1ttt111t111111ttffffLL
    LfttttffLLLfttttttfLftttttttfft11i;;:;;i11ttfftt11t111tt111tttfff
    LLffttfLLLfttfffftfLLttttttfff1;,,,,,,,,:;tffffft11111tft11111ttf
    LLLfftffttttffLffftfftttttfft1;:,,,,,::::,;tffftttt111tft1tttt1tt
    LLLfttttffftffffftfftttttfffti:;;;iiii11i;:tffffft11111111ttftttt
    LLLftffftfLftfftfLLLftttttfft::i;iiiiii11i:1ffftft11111ttt1ttt1tt
    LLfftfLLfffffLfffLLLfttttt1tt;:;;;;;iiiiiii1tffft11111tffft11t11t
    fttttfffffttLLLLfLLLftttft111i;;;;;;iiiiii111tt111t1111tffttfftt1
    ttttttttttttfLfLffLLfttttttt1iii;;;;;ii11i1t11t11111111tffttffftt
    ffffffffttfftfLLfffLftttttfft1ii;;;;iii1i1tt1tfftt11111ttt1tffttt
    fffffffttfffftffffftttttfffft111;;;;iiii1111t1ttttt1111tt11ffttff
    fffffffttttttttttffftttttttt11ttii;iiiiii11tft11ttt111111t11t1tff
    fffffftttttttt11ffffttttt1111tftiii;;iiii1;,;1111111111tttt111111
    fttttttttffttt11tffftttttt11ttf1;;;i;iiii1:,,.,,::;ii11tttt111ttt
    tttttttfffftttt11tfftttttt111tt1;;;i;;ii1t:,,........,:;1t111t1tf
    fftftttffffttffttttftt11tt111i;;;;;;;;;it1,,............,;11tt11t
    fffft1ttffftfffttttft111111;:,.;iii;;;i11,.,.............,1tttt1t
    ffftt11tffttfttttttt1111i;,....,1iii;ii;,................,111tt1t
    ttt1tttt1ttttttttt1111;:,.......i1;;;:::.................,it11t11
    111ttfftt11ttfffftt1ti..........:i;::;:,..................ittt111
    11tttttttt1tffffffftti,.........,::::::,..................itttt11
    11ttttttttttffffffft1i,.........,:,:::,...................,1tttt1
    11tftttfftttttffft1111:.........,:,:::,....................;tt111
    1tttttttftttttttttt111;.........,:,::,,....................,11111
    11tttttttttffttttfft11i.........,:.:,,......................:1tt1
    11ttttttt1tffftttfft111:....... ,:.:,,.......................1tt1
    1ttttttttttfttttttft111i,...... ,:,,,,......................,itt1
    1tfttttfftttttffttt1111i,...... ,:.,,,......................:1111
    1tfffffffttttfffft11111,....... ,,.,,....... ...............it111
    1ttttttttttttttttt1111;,....... ,,.,,......................:tt111
    11t1111tttttttttt1iiii:,,...... ,,.........................;t1111
    1111111ttttttttt1;;iiii:....... ,,............ ...........;tttt11
    1111111ttttttttt1;;;iii;... ....,::::,....,:::,,.........;1ttttt1
    111111111tttttttt1i;;ii:  .,....,:::::... .;;;;;:,.....,;1ttttttt
    1111111111tt1111111i,,.,:;i: ...,:::::.....:;;;;;:.....,1tttttttt
    11111111111111111111:.:1tti,....,:::::.... ,;;;;;;,.....itttttttt
    1111111111111111111111ttt;,,....,:::::,... .,;;;;:,.,,..:tttttttt
    11111111111111111111111t1,,,....:;;::::,.....:;;;:......,1ttttttt`;
    n[2] = `    tffffLffttfffffffLLLfttttttfttt11tffffffftttttttt111111tttttfffff
    tfffLLttffffffLLffffttttttttttt1ttt1iiiii1tttttttt11111tfffffffff
    fttffftffffffffffttffttttt11tttt1i::,,,,,,:;111111t111111ttffffLL
    LfttttffLLLfftttttfLftttttttfft1i;,,,,,,,,,:;ttt11t111tt111tttfff
    LLffttfLLLfttfffftfLLtttttffffti;::;;;;;iii::1ftt11111tft11111ttf
    LLLLftffttttffLffftffttttffffft;:;iiii11111i:iftttt111ttt1tttt11t
    LLLfttttffftffLLftfftttttffffft;:;;;;;iiiiii;1fftt11111111ttftttt
    LLLftffftfLftffffLLLftttttffffti;;;;;;;ii;iiitffft11111ttt1ttt1tf
    LLffffLLfffffLfffLLLLtttttttff1iii;;i;;iii111tfft111111ffft11t11t
    fttttfffffttLLLLfLLLffttftt11t1iii;;;;;iiiii1tt111t1111tffttfftt1
    ttttttttttttfLLLffLLftttttttft111i;;;;iiii1111111111111tffttffftt
    ffffffffttfttfLLfffLftttttfffft11i;;;;iiii1t1ttttt11111ttt1tffttt
    fffffffttfffftffffftttttfffft11t1i;;;;;iii1ii1ttttt1111t111ffttff
    fffffffttttttttttffftttttttt11tft1i;;;;iii1i,:;i1ttt11111t11t1tff
    fffffftttttttt11ffffttttt1111tfti;ii;;iiii1;,,...,:;ii1tttt1111tt
    fttttttttffttt11tffftttttt11t1iii;;ii;;;i1t:,.........,:;1t111ttt
    tttttttfffftttt11tfftt11tt1i:,.:;;;i;;;itti,,............,;1111tt
    fffftttffffttffttttft1111i:....,;;;ii;i11;.,,.............:1tt1tt
    ftffttttffftfffttttft1i:,.......:;;;;;;;:,................:tttt1t
    ffftt11tffttftttttttt1,.........,ii;;;;;,.................:11tt1t
    ftt1ttt11ttttttttt111i,.........,11;:;;:,.................,1t1t11
    111ttfftt11ttffffftt11,.........,i;::::,..................,1tt111
    11tttttttt1tffffffft11;..........::::::,...................;tt111
    11ttttttttttffffffft11:..........:::::,..,;:,...............ittt1
    11tftttffttttfffft1111:..........:::::,..;1i;:,..............1t11
    1tttttttftttttttttt111;..........::,:,...;ii;;;,.............:111
    1ttttttttttfftttttft11i,.........::,,,...;;;;;i:..............;11
    11tttttttttffftttfft11i,.........::,,,...;;;;;i:..............:11
    1ttttttttttfftttttft111:.........:,,,....::;;;;:.............,1t1
    1tfttttfftttttfftttt111:.........:,,,......,::::..,.........,i111
    1tfffffffttttfffft1111i:,........:,,,..... .......,,...... .it111
    1ttttttttttttttttt1iiii;,........:...........  ...........:itt111
    11tt111tttttttttti;;;iii:... ....:,,...................:i1tttt111
    1111111tttttttttt1;;;;;;;. .,....::::..................:1tttttt11
    1111111ttttttttttt1i;;::..:;1,...::::...................;ttttttt1
    1111111111tttttttt111i,.,it1;....::::,..................,1ttttttt
    1111111111tttt11111111ii1t1i:...,::::,........,..........ittttttt
    11111111111111111111111tt1;:....::::;:.......,...........:1tttttt
    111111111111111111111111ti,,....:;:;::,..................,itttttt
    111111111111111111111111t:,:.,.:;;;;:::,..................;111t1t`;
    n[3] = `    tffffLffttffffffffLLfttttttfttt11ttt1iiii;i11tttt111111tttttfffff
    tfffLLttffffffLLffffttttttttttt1tt1::,,,,,,:;1ttt111111tfftffffff
    fttffftffffffffffttfftttttt1ttt11i;:,,,,,,,,,:1111t1111111tffffLL
    LfttttffLLLfftttttfLftttttttffft1;:::;;;;;;;::it11t111tt111tttfff
    LLffttfLLLfttfffftfLLtttttfffffti:;;ii111111i:itt11111tft11111ttf
    LLLLftffftttffLffftffttttfffffft;:;;;;;iiiiii;ittt1111ttt1tttt11t
    LLLfttttffftffLLftfftttttffffffti;;;;;;;ii;iiitttt11111111ttftttt
    LLLftffftfLftffffLLLftttttfffff1iii;;i;;i1i1i1tttt11111ttt1ttt1tf
    LLffffLLfffffLfffLLLftttttttfft1i;;;;;;;iiiiitfft111111ffft11t11t
    fttttffffftfLLLLfLLLftttftt1111111i;;;;iiii111t111t1111tffttfftt1
    ttttttttttttfLLLffLLftttt1tttt11tti;;;iiiii111111111111tffttffftt
    ffffffffttfttfLLfffLftttttffft1111i;;;;;ii111tfttt11111ttt1tffttt
    ffffffffttffftffffftttttfffft11t11i;;;;iii1i:;1ttft11111111ffttff
    fffffffttttttttttffftttttft111tttiii;;iiii1;,,,:;i1111111111t1tff
    ffffffttttttttttfffftttt1111i;:;iiii;;;i;11:,,.....,:;i1tft1111tt
    fttttttttfftt111tfffttt11i;,,..:i;;;i;ii1t1,,..........,:i1111ttt
    tttttttffffttttt1tffti;:,,.....,;;;iiii1ti,,,.............;1111tt
    fffftttffffttffttttf1:.........,;:;;;;;;;,.,,,............:1tt1tt
    ftfft1ttffftfffttttf1,..........,;;;;;;;:.:ii;;:,.........:tttt1t
    ffftt11tffttfttttt1t1,...........ii;;;::,,;i;;ii:.........:tttt1t
    ftt1tttt1ttttttttt11i,..........,1i;;::,.:i;;;;i:.........,1t1t11
    11tttffttt1tttffft11i,..........,ii;:::,.,:;;iii:..........it1111
    11tttttttt1tfffffftti,...........:::::,....:;;ii:..........:tt111
    11ttttttttttfffffft1i,...........:::::,.....,:;;:.... ......,1t11
    11tftttffttttfffft111:...........:::::,........,..,..........,111
    1tttttttftttttttttt11:...........::,:,........ ...:;,.........:11
    1ttttttttttffttttttti,...........:::,,.............,...........,i
    11tttttttttffftttfft;,:;:........:::,.............. ...........:1
    1ttttttttttfftttttftii1i;:.......:::,.......... ..............:t1
    1tfttttfftttttffttt1ii;ii;,......::,,........................:111
    1tfffffffttttfffft11i;;ii;,......:,,,..........:........   .;t111
    1tttttttttttttttttt11;:;i:,,.....:,.................. .;i;;1tt111
    11t111ttttttttttttt11i:,,:1;....,::....................:1ttttt111
    111111tttttttttttttt11i;;1t:....:::::...................;tttttttt
    1111111ttttttttttttt111ttt1,,,.,:::::,..................,1ttttttt
    111111111tttttttttt1111111i,::.,;::;:,...................;ttttttt
    1111111111ttttttt11111111t;.,,.,;;;;;,...................,1tttttt
    111111111111111111111111t1:..,,:;;;;;:,...................;tttttt
    111111111111111111111111ti,,,::;;;;;;;:,..................,1ttttt
    111111111111111111111111t;,,::,;;;ii;;::,..................it1ttt`;
    n[4] = `    tffffLffttfffffffLLLftttttttttt11ttt1iiii;i11tttt111111ttttttffff
    tfffLLttffffffLLffffttttttttttt1ttt;:,,,,,,,:itttt11111tfftffffff
    fttffftffffffffffttfftttttt1tttt11i:,,,,,,,,,:i111t1111111tffffLL
    LfttttffLLLfftttttfLftttttttffft1;::;;;;;;;;;,;t111111tt111tttfff
    LLffttfLLffttfffftfLLtttttffffff1,:iiii111111;:tt11111tft11111ttf
    LLLLftffftttffLffftffttttfffffffi:;;;;;iiiii1;;ttt1111ttt1tttt11t
    LLLfttttffftffLLftfftttttfffffff1;;;;;;;ii;;ii1ttt11111111ttftttt
    LLLffffftfLftffffLLLftttttfffff1iiiiii;;iiii1itttt11111ttt1ttt11t
    LLffffLLftffLLLffLLLftttttttffftiii;;;;;ii1ii1tft111111ffft11t11t
    fttttfffffttLLLLfLLLftttft111tt111i;;;;iiiii1tt111t1111tffttfftt1
    ttttttttttttfLLLffLLftttt1tttt11tti;;;iiiii111t11111111tffttffftt
    ffffffffttfftfLLfffLftttttffft11t1i;;;;;iii11ttttt11111ttt1tffttt
    ffffffffttffftffftftttttffft111t11i;;;;iii1ii11tttt1111tt11ffttff
    fffffffttttttttttffftttttttt11111iii;;iiii1;,:;1tttt11111t11t1tff
    ffffffttttttttt1tffftttt11i;:,:i;;i;;;;;i11,,..,,:;i111tttt1111tt
    fttttttttffttt11ttff1ii;:,....,;::;i;;i11ti,,.......,:;ittt111ttt
    tttttttfffftttt11tff;,,........;;;;iii1tti,,,,:;;::,....,i11111tt
    fffft1tffffttfft1ttt:..........:;;;;;;;i;...,;i;iii:.....,i1tt1tt
    fffft11tffftffftttti,..........,:;;;;;;;,...,;;iiii,......;tttt1t
    ffftt111ffttft11tt1;,...........;i;;;;;:,.....:;iii,......;tttt1t
    ftt1tttt1tttt1tttti,............;1;::;;,......,;iii,......;t11t11
    111ttfftt111ttfffti.............;i;::::,.......,;;;,......;ttt111
    11ttttttt11tffffffi,............,::;:::,..........,.......:ttt111
    11tttttttttttffffti,............,:::::,..............,....,ittt11
    11tffttff11t1tfff1;...... ....,.,:::::,.....................;1111
    1tttttttfttttttti:,......:iiii;,,:::,:.......................,;11
    1ttftttttttfftti,,::,.,:;1i;;;;.,::::,.........................,i
    11ttttttt1ttfft1:::,,,:,:;;;;i:.,:::,,..........................;
    1ttttttttttfttt1;,...,...:;;;:, ,:::,..........................;1
    1tfttttfftttttfti,..,....,,,....,:::,.........................:11
    1tfffffffttttffft1;::::,,.......,:,:,..................     .:111
    1ttttttttttttttttttt11111:......,:,,,..................,::,:1tt11
    11t1111tttttttttttt111111:......,,.....................,1tttttt11
    1111111ttttttttttttt11111:......,:,,....................:1t1ttttt
    1111111ttttttttttttt1111t:......,;;::....................:1tttttt
    111111111ttttttttt1111111:......,::::,...................,itttttt
    111111111111tttt111111111:......,;;::,....................:1ttttt
    1111111111111111111111111:......:;;;::,...................,ittttt
    11111111111111111111111t1:......:;i;;::,...................:11ttt
    1111111111111111111111111,......:;;;;;::,..................,1tttt`;
    n[5] = `    tffffLftttfffffffLLLft1tttttft111tfftttfttttttttt111111ttttttffff
    tfffLfttffffffLLffffttttttttttt1ttti;;;;::;i1tttt111111tfffffffff
    fttffftffffffffffttfftttttt1ttt111i,,,,,,,,,;11111t1111111tffffLL
    LfttttffLLLfftttttfLftttttttffft1i::,,,,,,,,,:1t11t111tt1111ttfff
    LLffttfLLLfttfLfftfLLtttttfffffti:;;iiiiiiii::1tt11111tftt1111ttf
    LLLLftffftttffLffftfftttttffffft::;;iii1i111i:1ttt1111ttt1tttt11t
    LLLfttttffftffLfftfftttttfffffft;;;;;;;iiiiii;tttt11111111ttftttt
    LLLfttfftfLfffffffLLftttttfffft1ii;;;;;iiiiiitfttt11111ttt1ttt11t
    LLfftfLLftfffLLffLLLftttttttfftiii;;i;;ii111itfft111111tfft11t11t
    fttttffffftfLLLLfLLLftttft111tt1iii;;;;iiiii1tt111tt111tffttfftt1
    ttttttttttttfLLLffLLftttt1tttt11t1i;;;iiii1111t11111111tffttffftt
    ffffffffttftttfLfffLftttttfffft11i;;;;iiii111tfttt11111ttt1fffttt
    ffffffffttfftttfttttttttffft11111i;;;;;iii1tt11tttt1111t111ffttff
    fffffffttttttttttffftt11ttt1111t1i;;;iii1i1itt11ttt111111t11t1ttf
    fffffftttttt1111tffftttt11i;::i1iii;;;iii1i,:;i11t11111tttt1111tt
    fttttttttffttt11ttft1ii;:,....;i;;;ii;;i1t:,...,:;i1111tttt111ttt
    tttttttfffftttt11t1:,,........ii:;;iii1tt1,,,......,,;i1tt11111tt
    fffft1tffffttfft11;,..........:;::;ii11t1:,,,...,,:,...,it11tt11t
    fffft11tfffttfttt1,....,,......,:;;;;;;i,.......:iii;;,.,1t1ttt1t
    ffft1111tfttft11ti,.............;i;;;;;:........:iiiii:..it11tt1t
    ttt1tttt1tttt1tt;,..............i1;;;;;,........,;iii;,..it111t11
    111ttfft11111tft:...............;i;;;;:,.........:;ii:..,ittt1111
    11ttttttt11ttff1,...............,::::::......... ,;ii:...itttt111
    11ttttttt111tft;,...........  ..,:;:::,...........,:;:...;ttttt11
    11ttttttf11111;:,..... .....,:::::::::...............,...:1ttt111
    11ttttttt11ti,,...........,:;i;;;:::::..................,.:tt1111
    11ttttttt111,.,,,,...,,..,;;;;;i;:,::,....................,;i1t11
    11ttttttt11t:.......,....,:;;;;;:::,:,.......................:1t1
    1tttttttt11t1,............,,,...,::::.........................:11
    1ttttttfft1t1:,............  .. ,:::,........................,i11
    1tfftttfftttttt1;::,,::.........,:,,,........................i111
    1tttttttttttttttttt111i.........,::,,.................   . .;t111
    1111111tttttttttttt111i,........,:,,...................,..,itttt1
    1111111tttttttttttt111i,....... ,:....................i111ttttttt
    1111111ttttttttttt1111i,....... ,:,::,................,i1t11ttttt
    111111111tttttttt11111i,........,::;:,..................;1ttttttt
    1111111111tttt11111111i........ ,,:::,..................,1ttttttt
    1111111111111111111111i,........,,:::,...................it111ttt
    111111111111111111111t1,........,,,:::,..................,1t1tttt
    11111111111111111111111,........,,,;;::,..................i111ttt`;
    n[6] = `    tffffLftttfffffffLLLft11tttfft111tfffffffttt1ttttt11111ttttttffff
    tfffffttffffffLLffffttt1ttttttt1tt111ii11tft1ttttt11111tfftffffff
    fttfffttfffffffffttffftttt111ttt1:,,,,,,,:i1111111t111111ttffffLL
    LfttttffLLLfftttttfLLfttttttftt1;:,,,,,,,,,;1tt111t1111t111tttfff
    LLffttfLLLfttfffftfLLfttttffft1i;;;;;;;;;;::1tttt11111ttt11111ttf
    LLLLftffftttffLLfftfftttttffffi:;iii111111i:ittttt1111ttt1tttt11t
    LLLfttttffftffLfftfftttttfffff;:;;;;iiiiiii:ittttt11111111ttttttt
    LLLfttfftfLftfffffLLftttttffff1i;;;;;ii;iiiittttft11111ttt1ttt1tt
    LLfftfLLftfffLfffLLLftttttttf1i1i;i;;iiii1i1tffft111111tfft11t11t
    fttttfffffttLLLLfLLLftttft1111iii;;;;ii1i1i11tt111t1111tffttfftt1
    ttttttttttttfLLLffLLfttttttttt11i;;;;iiii11t11111111111tffttffftt
    ffffffffttftttfLfffLftttttffft11i;;;iiiii1t11ttttt11111ttt1fffttt
    ffffffffttffttfffttttttttfft1111i;;;;iii1111111tttt1111tt11ffttff
    fffffffttttttttttffftt11tttt11t1ii;;;iii11tfft11ttt111111t11tttff
    fffffftt1ttt1111fffft1tt11iiii1iiii;iiii1i:1tft11111111tttt111ttt
    fttttt1ttfft11111tft11i;:,..,;ti;;;i;iii1;,,,:;i1111111tttt111ttt
    tttttttfffftttt11i;::,,......iti::;i;iitt:,,....,:;i111ttt111t1tt
    fffftttffffttft11:...........;ii::;i11tti,,,,.......,:itt111tt1tt
    ftfft11tfffttftt;,............,:;;;;;11;,..............;1111ttt1t
    ffft1111tfttft11:.............,:ii;;;;;,...............:11t11tt1t
    ttt1ttt11t1111t;,..............:i1;;;;:,...............,111111t11
    111tttft11111t1,...............:ii;;;;,............,,,.,1tttt1111
    11ttttttt11ttfi................:;::;::,...........,;i;;:1tttttt11
    11ttttttt11ttfi................,;;:::,............,;iiii1tttttft1
    11ttttttt11111;........  .......:;:::,............:iiiii11ttftt11
    11ttttttt11ti:,....... ,:::;;:,.,;:::,............:;;ii:i11tt1111
    11ttttttt11i,.........,iii;;;,..,:::,.............::;;,.it1111tt1
    11ttttttt11,.,,,,..,,,:;;;;;;,..,:::,.............,::;..:i111ttt1
    11ttttttt11;,,,...... .:;;;;:...,:,,,.....................:111tt1
    1tttttttt111,..........,,,,.....,:,,.......................:11111
    1ttttttfft11i:,.....,....  .....,::,......................,1t1111
    1ttttttttttttt1ii;;;:...........,:,,.....................,it11111
    1111111tt1tttttttt11:...........,:,,..............      .;t111111
    1111111ttttttttttt11,.......... ,,................,:,,,:i1tttt1t1
    1111111tttttttttt11i,...........,,,,..............:1t11tttttttttt
    111111111tttttt1111;........... ,,:;,..............:11ttttttttttt
    11111111111tttt1111;........... ,,:;:...............:111ttttttttt
    1111111111111111111;....,,......,,,::................i1tttttttttt
    1111111111111111111;............:,,;:,...............;1tttttttttt
    1111111111111111111:............,,:;;:...............,1t1tttttttt`;
    n[7] = `    tffffLftttfffffffLLLftt1tttttt111ttfffffftttttttt111111tttttfffff
    tfffLfttffffffLLffffttt1tttttt11tffffffffffttttttt11111tfffffffff
    fttfffttfffffffffttffftttt11111111i;i11ttt11tt1111t111111ttffffLL
    LfttttffLLLfftttttfLLfttttttfti:::,,,,:;i1ttfttt11t111tt111tttfff
    LLffttfLLLfttfffftfLLftttttft1;,,,,,,,,,,;tffffft11111tft11111ttf
    LLLLfttfttttfLLfLftffttttfffti;:;;;;iii;::1fffffttt111ttt1tttt1tt
    LLLfttttffffffLfftfftttttfffi;;iiiii1111i:iffffftt11111111ttttttt
    LLLftffftfLftffffLLLftttttffi:;;;;iiiiiii:1ftttfftt1111ttt1ttt1tt
    LLfftfLLftftfLfffLLLLttttt1t1i;;;;;ii;iiii1ttffft111111tfft1tt11t
    fttttfffffttLLLLfLLLftttft11i1i;;;;i111iii111tt111t1111fffttfftt1
    ttttttttttttfLLLffLLftttt1tti1i;;;;ii1iii1tt11111111111tffttffftt
    ffffffffttftttfLfffLftttttfftt1;;;;iiii11ttt1ttftt11111tfttffftt1
    ffffffffttffttfftttttttttfft111i;;;iiii1t111t1ttttt1111tt11ffttff
    fffffffttttttttttfffttt1tft1111i;;;iiii111tfft11ttt111111t11tttff
    fffffftt1ttt1111tffft11t111111iiii;;iii111fffft11111111ttft111ttt
    fttttt1ttfft1t11ttfftttt1iiii1i;;;iii1i1i,;i1ttt1111111tttt111ttt
    tttt11tfffftttt11tff11i;:,,,:11i;;iii;it;....,:;i111111ttt111t1tt
    fffftttffffttfft1ii;:,,.....:11;:;;;;1tt;,,,.....,,;i11tt111tt1tt
    ftfft11tfffttft1;,..........:1ii;;ii1tti,,,..........,it1111ttt1t
    ffft1111tfttft1i,............,:;ii;;i1i,..............:111111tt1t
    ttt1ttt11t1111t;..............,;1i;;;;,...............,1111111t11
    111ttttt11111tt:............. ,;ii;;;:,...............,i111tt1111
    11ttttttt11ttft,...............;;;;;:,.................ittttttt11
    11ttttttt11ttf1,...............:;;;::,.......,,,.......;tttttfftt
    11ttttttt1111t1,...............:;;;::........,;i;:,....;t1ttfttt1
    11ttttttt11t111,...............,::::,........:iiiii:...;t11tt1111
    11ttttttt11ttt1,..... ..........::::,.......,;iiii;,...it11111tt1
    11ttttttt11tt1:...  .,..........,:::.........:;;i;,...,1t1t11tft1
    11ttttttt1tt1:,...:;ii:.........,::,.........,:;;:.....,it1111tt1
    1ttttttttt1t;::,;iiii;,.........,:,,...........,,,......,;1111111
    1ttttttfft1ti:,,;;;:;;,.........,:,,.......... ..........:tttt111
    1ttttttttttt1,.,::::;;:.........,:,,...............,....;ttttt111
    1111111111ttti:,,,::;:..........,:,,............ ......;ttttt1111
    1111111tttttttt1:,,,............,:,.............,.  .,;11tttttt11
    1111111tttttttttt1:.............,,............ .11ii1ttttttt11111
    111111111tttttt111,.............,::,,...........ittttttttttttt111
    11111111111111111;..............,;;;:,..........:11tttttttttttttt
    11111111111111111;..............,;;;:,...........:11ttttttttttttt
    11111111111111111:..............,;;;;:...........:1tttttttttttttt
    11111111111111111:..............,;i;::,..........,1tttttttttttttt`;
    n[8] = `    tffffLffttfffffffLLLft11tttttt111tfffffffttttttttt11111ttttffffff
    tfffLfttffffffLLffffttt1ttttttt1ttfffffffffttttttt1111ttfftffffLf
    fttfffttffffffffftttfttttt111ttt1ttffffffttttt1111t111111ttffffLL
    LftttttfLLLfftttttffLftttttttt11ii11fffft1ttfftt11t111tt111ttfffL
    LLffttfLLLfttfffftfLLfttttt1i:;:,,::;i1tttffffftt11111tft11111ttf
    LLLLftffttttffLffftffttttfti:,,,,,,,,,:;tfffffttttt111tftttttt1tt
    LLLfttttffftffLfftffttttttti:::::;;;;;,,1ffttffttt11111111ttttttt
    LLLfftfftffftffffLLLfttttti;iiiii11111;:1ttfffffftt1111ttt1ttt1tf
    LLfftfLLftttfffffLLLLttttt;;i;;iiiiii1;:i11tfffft111111ffft1tt11t
    fttttfffffttLLLLfLLLftttft1ii;;;ii;;iii;tt11ttt111t1111tffttfftt1
    ttttttttttttfLLLffLLftttt11ti;;;iiii1iii1ttt1ttt1111111tfftfffftt
    ffffffffttftttfLfffLfttttt11i;;;iii1iii1tttt1tfftt11111tfttffftt1
    ffffffffttfftttfftffttttfft11;;;iiiii11tt111ttttttt1111tt1tffttff
    fffffffttttttttttfffttt1tft11i;iii11i11111tfft11ttt11111tt11tttff
    fffffftt1ttt111tfffftttt11111i;i;iiii111ttfffft11111111tttt11tttt
    fttttt1ttfftt111tfffttt111111;;i;;iii11i1ttffft11111111tttt111ttt
    tttt11tfffftttt11tffttt1t1ii1;;i;;iiii1;,::i11tt1tt1111ttt11tt1tf
    fffft1tffffttfft11tft11i::,,1ii;:;ii;it:,,...,,:;i11111tt111tt1tt
    ftfft11tfffttfttttt1i:,....,it1i;;;;i1t;,,,,.......,;111t111ttt1t
    ffft111ttfttft11i;:,........i1tt1ii1tt1:,,...........:1111111tt1t
    ttt1ttt11t1111t;,...........,;;;11;;;;:..............,1t111111t1t
    111ttttt11111tt:..............:;ii;;:,................it111tt1111
    11ttttttt11ttf1,..............,;;;;::,................it1tttttt1t
    11ttttttt11ttfi................;;;:::,,:;:,...........;tttttttftt
    11ttttttt1111ti................:;:::,.:;iii;,.........:111ttfftt1
    11ttttttt11t11;................,;:::,.;iiiii:.........:tt11ttt111
    11ttttttt1tttt;................,::::,.:;;ii;,.........;ttt1111tt1
    11tttt1tt11ttti.................:::,...,;;i;,.........itttt11ttt1
    11ttttttt11tt1;.................:::,....,:;:,.........,1tt1111tt1
    1ttttttttt1t11:.................:::,.... ..............:1111111t1
    1ttttttfft11ti;,................,::,.........,......... :ttttt111
    1tttttttt1tt1iiii:..............::,,...................:1tttt1111
    11111111t111iiiiii:.............,:,,,.................:1ttttt1111
    11111111t11i;;iiii;.............,:,,,...........   .,;ttttttttt11
    1111111tt1t1i;;ii;,.............,,........... :i;;i1tttttttt11111
    1111111111ttti:,,...............,,,.......... :ttttttttttttttt1t1
    11111111111111;::...............:;;::,........,i11ttttttttttttttt
    111111111111111t;...............:ii;;:,........;t1ttttttttttttttt
    1111111111111111:...............:;i;:::........:ttttttttttttttttt
    1111111111111111:............. ,;ii;;;:,..,,...:ttttttttttttttttt`;
    n[9] = `    tffffLffttfffffffLLLftt1tttttt111tfffffffftttttttt11111tttttfffff
    tfffffttffffffLLffffttttttttttt1tffffffffffttttttt11111tfffffffLf
    fttfffttfffffffffttffttttt1111tt1ttffffffttttt1111t111111ttffffLL
    LfttttffLLLfftttttfLftttttttfffttttffffftttffftt11t111tt111ttfffL
    LLffttfLLLfttfffftfLftttttt11i;;;;i1tftttffffffftt1111tftt1111tff
    LLLLftffttttffLLfftffttttti:::,,,,::;i1tffffffffttt111tft1tttt1tt
    LLLfttttffftffLfftfftttt11;,,,,,,,:,,,;tffffffffttt1111t11ttttttt
    LLLftffftfLftffffLLLftttt1i;;;;iiiii:,:1tttfffffftt1111ttt1ttt1tf
    LLfftfLLftttfLfffLLLLttt1i1iiiii1111i::1111ttffft111111ffft1tt11t
    fttttfffffttLLLLfLLLftttt11;;;iiiiiii:;ttt111tt111tt111tffttfftt1
    ttttttttttttfLLLffLLftttt1i;;;iii;iii;ittfft11tt1111111tfftfffftt
    ffffffffttfttfLLfffLfttt111;;;i111111iitfttt1tfftt11111tfttfffttt
    ffffffffttffttffftfftttttt1i;;iiiii1i1tft11tttttttt1111tt1tffttff
    fffffffttttttttttfffttt1ttti;;;i111iitt111tfft11ttt111111t1ttttff
    fffffftt1ttt111tfffftttt111ii;iii;ii11111tfffft11111111tfft11tttt
    fttttt1ttfft1111tffftttt1111;;;i;;;i111ttttffftt1111111tttt111ttt
    tttt1ttfffftttt11tfft111tt1i;;;i;;i1i1;i11tffftt11t1111ttt11tt1tf
    fffftttffffttfft11tft11ii;ii;;;;:;iii1,.,,,:;iii1ttt111tt111tt1tt
    ftfft11tfffttftttttt1;:,..:11;;i;;;;11:,,,.....,,:i1111tt111ttt1t
    ffft1111tfttft1111i:,.....,i11iiiii1tt:.,..........:111111t11tt1t
    ttt1ttt11t11111;:,.........;i11i1111t;..............;t11111111t1t
    111ttfft111111:.............,::;ii;;:...............:111111ttt111
    11ttttttt11tt1,..............::;;;;;,...............,1111tttttt11
    11ttttttt11tfi,..............,::;;::,,...............i111ttttfftt
    11ttttttt111ti................::::::,:;;::,..........it111ttffttt
    11ttttttt1tt1;................,;::::.:iiiii,.........;11111ttt11t
    11ttttttt11tti,................::::,.:ii;ii:.........;tttt1111ttt
    11ttttttt1ttf1.................,:::,.,:;iii:.. ......:ttttt11tft1
    11ttttttt1ttt;::...............,:::,. .:;ii:..........;ttt1111tt1
    1ttttttttt1t111i;,..............:::,....,::,...........;1111111t1
    1ttttttfftt1iiiiii:.............:::,....  ............. :ttttt111
    11ttttttttt1i;iiii;,............,:,,,................. ,1tttt1111
    111111111111i;iii1i,............,::,,.................:1tttt11111
    11111111111t1;;;;;,.............,:,,,..........     .:1tttttt1111
    1111111111t11;,.................,:,,..........,;:::;1ttttttt11111
    11111111111111:..,..............,,............:ttttttttttttttttt1
    111111111111111ii;..............,::,...........i111ttttttttttt111
    111111111111111t;...............,;ii;::,.......:1ttttttttttttt11t
    111111111111111i,...............:;ii;;;:,......,1tttttttttttttttt
    11111111111111ti,...............:;ii;;;;:,..:..,1tttttttttttttttt`;
    n[10] = `    tffffLffttfffffffLLLftt1tttttt111tfffffffftttttttt11111tttttfffff
    tfffffttffffffLLffffttttttttttt1tffffffffffttttttt1111ttfffffffLf
    fttfffttfffffffffttffftttt1111tt1ttffffffttttt1111t111111ttffffLL
    LfttttffLLLfftttttfLftttttttfffft1ttfffftttffftt11t111tt111ttfffL
    LLffttfLLLfttfffftfLftttttfttttttttttftttffffffftt1111tftt1111tff
    LLLLftffttttffLffftffttttt1ii::::;111tttffffffffttt111tft1tttt1tt
    LLLfttttffffffLfftffttttt1:,,,,,,,,:;ittffffffffttt1111t11ttttttt
    LLLftffftfLftffffLLLftttti::,::::::,,,;ttttfffffftt1111tft1ttt1tf
    LLfftfLLftttfLfffLLLfftt11iiiii111i;,,;t111tfffft111111ffft1tt11t
    fttttfffffttLLLLfLLLftttt1iiiii1111i:,iftt111ttt11tt111tffttfftt1
    ttttttttttttfLLLffLLftttti;;;ii;iiii::1ttttt11tt1111111tfftfffftt
    ffffffffttfttfLLfffLfttt1i;;i1i;iiii:;tftttt1tfftt11111tfttfffttt
    fffffffftfffttffftffttttti;;iii111i1iitft11tttttttt1111tt11ffttff
    fffffffttttttttttfffttttti;;;ii1111ii1t111tfft11ttt111111t11tttff
    fffffftt1ttt111tfffftttt1i;;;iiiiii11111ttfffft11111111tfftt1tttt
    fttttt1ttfft1111ttffttt111i;;ii;;;itt11ttttfffft1111111tttt111ttt
    tttt11tfffftttt11tfft1t1t1i;;;ii;;it111ttttffftt11t1111ttt111t1tf
    fffftttffffttfft1ttft11ii1;;;;i;:;i1;;i11tttft111tt1111tt111tt1tf
    ftfft11tfffttftttt1i;:,,:1i;;;;i;;;1;.,,,;;i11111111111tt111ttt1t
    ffft111tffttft1ii:,.....,11iiiiiii1t:,,,.....,:;i111111111t11tt1t
    ttt1ttt11t11i;:,........,i1tt1ii11tt:,,,,........:t11111111111t1t
    111ttfftt11i,............::;;iiiii1;,,............it1111111ttt111
    11ttttttt11;...............:;;;;:;;...............:111111tttttttt
    11ttttttt11:...............,;;;;;;:,..............,111111ttttfftt
    11ttttttt11,...............,:;;;;:,...............,1111111ttffttt
    11ttttttt11:......  ........:;;;;:,...............,11111111ttt1tt
    11ttttttt11:.......:;;;:....,;;::::.......,::,....,1tt11tt1111tt1
    11ttttttt11:.....:;;;;;:.....:;:::,.......,:iii;,.,1t1t11tt11tft1
    11ttttttt1i,.....:;:;;;:.....,::::,........;;iii;..;t1111t1111tt1
    1tttttttt1i,.....:::;;;,......::::,.......,;;ii;:..,;1t11111111t1
    1ttttttttti....,,,,:;;,.......,:::,,.......,;;;;,....,it11tttt111
    11ttttttt1:,,.,,,..,,,.........::::,........,:;,..... ,1tttttt111
    111111111i,,..,,,.... .........::::,..................itttt111111
    1111111111,...,,...............,::,,,...........,,...;tttttt11111
    11111111111,..... .............,::,,,.........   . .:1tttttt11111
    1111111111ti,,,.,,..............::,,..........,,,::i1tttttttttt11
    11111111111111i11;..............:,............,1tttttttttttttt111
    1111111111111111i...............:;:::::,.......;tttttttttttttt11t
    1111111111111111:...............:iiii;;::,......itttttttttttttttt
    1111111111111111,...............:iiiii;;:,......,1ttttttttttttttt`;
    n[11] = `    tfffffftttfffffffLLLftt1tttttt111tfffffffftttttttt11111tttttfffff
    tfffffttffffffLLffffttttttttttt1tffffffffffttttttt11111tfffffffLf
    fttfffttfffffffffttfftttttt11ttt1ttfffffftttttt11tt111111ttffffLL
    LfttttffLLLfftttttfLftttttttfffft1tffffftttffftt11t111tt111ttfffL
    LLffttfLLLfttfffftfLfttttttffffffttttftttffffffftt1111tftt1111tff
    LLLLftffttttfLLffftfftttttftttttttffttttffffffffftt111tfttttttttt
    LLLfttttffffffffftffttttttiii;::::i1ttttffffffffftt1111t11ttttttt
    LLLftffftfLfttfffLLLfttt11:,,,,,,,:::itttttfffffft11111tft1ttt1tf
    LLfftfLLftttfLfffLLLLfttt1i::::,,::,,,itt11tfffft111111ffft1tt11t
    fttttfffffttLLLLfLLLftttttiiiiii1i;:,,:ttt111ttt11tt111tffttfftt1
    ttttttttttttfLLLffLLftttti;iiii111i;:,iftftt11ttt11111tffftfffftt
    ffffffffttfttfLLfffLfttt1;;;ii;iiii;::1ffttt1tffft11111ffttfffttt
    fffffffftfffttffftfftttt1;;i1i;;iii;:itft11tttttfttt111tt1tffttff
    fffffffttttttttttffftttt1;;iiii111iii1t111tfft1tttt111111t1ttttff
    fffffftt1ttt111ttffftttti;;iiiiiiiii1111ttfffft11111111tffttttttt
    fttttt1ttfft1111ttfftttt1;;;iiii;;itt11tffffffft1111111tttt111tft
    tttt11tfffftttt11tfftttt1i;;;;ii;;it1111tftfffft11t1111ttt111t1tf
    fffftttffftttfft11tft111i;;;;;ii;;i111111tttft111tt1111ttt11tt1tf
    ftfft11tfffttfttt11i;;:ii;;;;iiiii1;11tt111t11111tt1111tt111tft1t
    ffft1111tfttftii;:,....;1i;;;;ii111,,:;i1tt11tt11111111111t11tt1t
    tt11ttt1111i;:,.......,i1tiiii;;11i,,,..,:;i1t1t111t1111111111t1t
    111ttttt1i:...........,ii111iii11i:.,,......,:;1t111111111tttt111
    11tttt11t;..............,::;;i1ti:,............,1t1111111tttffttt
    11tttttt1,...............:;:;;;;;:..............;tt111111tttffftt
    11tttttt1................,;;;;;;;:..............:t11111111ttffttt
    11tttttti............... .:;;;;;:,..............:1111111111tttttt
    11tttttt;............. .:;;;;;;:::..............:111tt11tt111ttt1
    11ttttt1,..............:;i;;i;::::..............:1ttt1111tt11tff1
    11ttttt;..............:;;;;;i:::::..............;1111111111111tt1
    1tttttt:..............:;;;::;:::::..............;t1111111111111t1
    1ttttt1,........... .,,:,...,:::::..............,11i;;i111tttt111
    11tttt;............,..... ...,::::...............:i;:;;i1ttttt111
    111111,............,.........,::::,..............,:::;ii1tt111111
    111111,............ .........,,,::,..............::::;i11tt111111
    1111111:.......  .............,,:,,..............,::::i111t111111
    11111111:....,,,,.............,:::,,..................,1t11111111
    111111111iiii11t; .............,:,..,........       ..:1tttttt111
    111111111111111t:...............:,,,:,,......,,,,,:;;1tttttttt1t1
    111111111111111t: .............::;ii;::,.....,i111ttttttttttttttt
    111111111111111t:..............:;;iiii;:,.....,i1tttttttttttttttt`;
    n[12] = `    tffffLftttfffffffLLLfttttttttt111tfffffffftttttttt11111tttttfffff
    tfffffttffffffLLffffttt1ttttttt1tffffffffffttttttt11111tfffffffLf
    fttfffttfffffffffttfftttttt11ttt1ttfffffftttttt11tt111111ttffffLL
    LfttttffLLLfftttttfLftttttttfffft1ttfffffttffftt11t111tt111ttfffL
    LLffttfLLLfttfffftfLfttttttffffffttttffttffffffftt1111tftt111ttff
    LLLLfttfttttfLLffftfftttttfftffffffftttfffffffffftt111tft1ttttttt
    LLLfttttffffffffftfftttttt1iii::;i1ttttfffffffffftt1111t11ttttttt
    LLLfftfftfLfttfffLLLfttt11:,::,,,,,:;1tttttfffffftt1111tft1ttt1tf
    LLfftfLLftttfLLffLLLffttt1;:,,,,,,,,,;ttt11tfffft111111ffft1tt11t
    fttttfffffttLLLLfLLLftttt1iiiiiiii;:,,iftt111ttt11tt111tffttfftt1
    ttttttttttttfLLLffLLfttt1i;iii1111i:,:1ftfft11ttt111111tfftfffftt
    ffffffffttffttfLfffLfttt1;;;i;iii1i:,;tffttt1tffft11111tfttfffttt
    fffffffftffftttfffffttt11;;;ii;;iii::1fft11tttttfttt111tt1tffttff
    fffffffttttttttttfffttt1i;;iiiii11i;itt111tfft1tttt111111t1ttttff
    fffffftt1ttt111ttfffttt1i;;iiiiiiiii1111ttfffft11t11111tffttttttt
    fttttt1ttfft1111ttffttt1i;;;iiii;;;1t11tffffffft1111111ttttt1ttff
    tttt11tfffftttt11tfftt111;;iiiii;;;1111ttftfffft11t1111tttt1tt1tf
    ftfftttffftttfft11tft1i1i;;;;iii;;;111111tttft111tt1111ttt11tf1tf
    ftttt11tfftttfttt11i;;;1;;;;;iiii;i1t11t111t11111tt1111tt111tft1f
    fttt1111tftttti;:,,...:1i;;;;iiii1i:;i1ttt111tt11111111111t11tt1t
    tt11ttt111i;:,,.......:11ii;;ii;11i,.,,:;11tt11tt11t1111111111t1t
    111ttttt1:............:1111iiii1ti;,,....,,;i1tttt11111111tttt111
    111ttt1t;...............,:;;i1tt1;,..........,itttt111111tttttttt
    11ttttt1,................:::::;i;:,...........,1ttt111111ttttfftt
    11ttttti.................,;;;;;;;:,...........,1t111111111ttffttt
    11ttttti................,,;;;;;;::,............it1111111111tttttt
    11ttttt;.............:;iii;;:;;:::,............it1111111tt111tttt
    11tttti,............,;;iiii::;::::,...........,1ttttt111ttt11tft1
    11ttt1:.............:;;;iii;::::::............,1tttt1111111111tt1
    1tttti..............,;;;;:,,:::,,:............:tt11t11111111111t1
    1tttt:............. ,::,.  .::,,,:........... :t1111111t111ttt111
    111ti.......................,:::::.............it111t11111tttt111
    1111,.............,.........,:::::.............:1t11ii;:;11111111
    1111:........................,,:::..............;ii;:;:;ii1111111
    11111:.......  ..............,,,:,...............,:::::;i11111111
    111111:......,,..............,,,:,...............:::;::;i11t11111
    1111111iiiiii1;...............,,,,.,..............,::::;111111111
    11111111111111;................,,:,,,......           .it11111111
    1111111111111t;...............;i;;;::,.....,,.....,,,;i1ttttttttt
    1111111111111t;...............:i;;i;::,....:i111111tttttttttttttt`;
    n[13] = `    tffffLftttfffffffLLfftt1tttttt111tfffffffftttttttt11111tttttfffff
    tfffffttffffffLLLfffttt1ttttttt1tffffffffffttttttt11111tfffffffLf
    fttfffttffffffffftttftttttt11ttt1ttfffffftttttt11tt111111ttffffLL
    LfttttffLLLfftttttfffttttt1tfffft1ttfffffttfffft11t111tt111ttfffL
    LLffttfLLLfttfffftfLftttttttfffffftttffttffffffftt1111tftt111ttff
    LLLLfttfttttfLLffftffttttt111i;iitfftttfffffffffftt111tft1ttttttt
    LLLfttttffffffffftfftttt1;:,::,,,:;ittttffffffffftt1111t11ttttttt
    LLLfttfftfffttfffLLLftt1i:,,,,,,,,,,:1tttttfffffftt1111tft1ttt1tf
    LLfftfLLftttfLLffLLLftt1i;;;;;;;i;:,:tftt11tfffft11111tffft1tt11t
    fttttfffffttLLLLfLLLft1;iiiii11111i::tffft11tttt11t111tfffttfftt1
    ttttttttttttfLLLffLLftt11;;;iiiiiii:;tffffft11tt1111111tfftfffftt
    ffffffffttffttLLfffLft11i;;;;i;;iii;tffffttt1tffft11111tfttfffttt
    fffffffftffffttfftfttt11i;;;i1iii1iitffft11tttttfft1111tt1tffttff
    fffffffttttttttttffftt11i;;;iii111ii1tt111tfft1ttft111111t1ttttff
    fffffftt1ttt111ttffftttti;;;;iiiiii11111ttfffft11t11111tffttttttt
    fttttt1ttfft1111ttffttt1i;;;iiii;;itt11tffffffft1111111ttttt1ttff
    tttt11tfffft1tt11tfft111;;;;;iii;;it111ttfffffft11t1111tttt1tt1tf
    ftfftttffftttfft11tti;;1;;;:;iii::i111111ttfft111tt1111ttt11tf1tf
    ftttt11tfftttft1i;:,..,1i;;;;iii;i;:;;1t111t11111tt1111tt111tft1f
    fftt1111tt1ii:,,......,i1i;;;ii;11;...,:;i111tt11111111111t11tf1t
    tt11ttt11;,,..........,11t1iiii1t1:,,.....,:i111111t1111111111t1t
    111ttttti,.............:;;iii11t1i,,.........,ittt11111111tttt11t
    111tttt1:................:;;;;;i;:,...........:ttt1111111tttffttt
    11ttttti.................,;;;ii;;:............,1ttt11111ttttffftt
    11ttttti..................:;;;i;;:,...........,1tt11111111ttffttt
    11ttttt;..................,;;;;;::,...........,1t1111111111tttttt
    11ttttt;...........,,.....,;;:;:::............,111111111tt111tttt
    11tttti,........,;ii:......:;:::::............,ittttt111ttt11tft1
    11tttt;........:;;;;:,.....,;:::::.............ittttt1111t1111tt1
    1tttt1,.......,:::;;;,......::::::.............;tt1t1111111ttt1tt
    1tttti.........,:::;:.......,:::::..........,,:;1t11111111ttff111
    111t1,..........,:::........,:::::..........,:;;i1111t111ttttt111
    1111;............,,.........,::::,.........,:;;;i1111111111111111
    11111:.......................,:::,.. ......,:;;ii1111111111111111
    111111:.......,..............,:::,..........,::i11t11111111111111
    1111111:,,..,, ..............,,,::,............,11111111111111111
    1111111111i11:...............,..,:,,.....    ..:1t111111111111111
    111111111111;................,::::,,.....::::;i11tttt111111t11111
    111111111111,.................ii;;::,....:1tttt1ttttttttttttttttt
    1111111111ti..................;i;;;:,.....;t1tttttttttttttttttttt`;
    n[14] = `    tffffLftttfffffffLLffttttttttt111tfffffffftttttttt11111ttttffffff
    tfffffttffffffLLffffttttttttttt1tffffffffffttttttt1111ttfffffffLf
    fttfffttffffffffftttfttttt1111tt1ttffffffttttt1111tt11111ttffffLL
    LfttttffLLLfftttttffftttt11tttffttttfffffttfffft11t111tt111ttfffL
    LLffttfLLLfttfffftfLftt11ii;i;;ii1tttffttffffffftt1111tftt111ttff
    LLLLfttfttttfLLffftfftt1:,,,,,,,,:iftttfffffffffftt111tft1ttttttt
    LLLfttttffffffffftff1i;;:,,,,,,,,:;ttttfffffffffftt1111t11ttttttt
    LLLfttfftfffttfffLLLt;,,:;;;;;iiii:ittttttffffffftt1111tft1ttt1tf
    LLfftfLLftttfLLffLLLfi,:iiii111111;1ffftt11tfffft11111tffftt1t1tt
    fttttfffffttLLLLfffffi:;;;;;iiiiiiitffffft11tttt11t111tfffttffft1
    ttttttttttttfLLLffLLti;;;;;i;;iiii1ftffffftt11tt1111111tfftfffftt
    ffffffffttffttfLfffLtii;;;ii;;i1111tfffffttt1tffft11111tfttfffttt
    fffffffftffffttfftftt1ii;;;;;;iii11ttffft11tttttfftt111tt1tffttff
    fffffffttttttttttffftt11i;;;;;i111111tt111tfft1ttft11111tt1ttttff
    fffffftt1ttt1111tfffttti;;;;;;iiiii11111ttfffft11t11111tffttttttt
    fttttt1ttfft11111tfft11i;;;:;;ii;;itt11ttfffffft1111111ttttt1ttff
    tttt11ttffft1tt11ttti::i;;;:;iii;;;i;i1ttftfffft1tt1111tttt1tt1tf
    ftfft1tffftttff1i;:,...;1;;;;;i;:;i,..,:;i1tft111tt1111ttt11tf1tf
    ftttt11tfft11i;:,......,11;iii;;iii,,,....,:;i1111t1111tt111tft1f
    fftt1111t1;;,..........,i1t11ii11i:.,........,111111111111t11tt1t
    tt11ttt11:..............;iiiiiii11,,,......,,,itt11t1111111111t1t
    111ttttt;................,;;;i;;ii,...........;ttt11111111ttt111t
    111ttt11:.................:;;;i;::............;ttt1111111tttftttt
    11ttttt1,.................,;;;;;;:............:ttttt11111tttffftt
    11ttttt1,..................:;;;:::............:1tt11111111ttffttt
    11ttttti...................,;;::::............,111111111111tttttt
    11ttttt:...................,::::::,:::,.......,1t1t11111tt111tttt
    11tttt1,....................,::::::;;;ii:......ittt11111ttt1ttff1
    11tttti.....................,:::::,;;;ii;,.....itttt1111tt111tttt
    1ttttt;........ .............:::::,;;;ii;,.....:1t1t1111111tttttt
    1ttttt:.... :i;:.............:::::..,;;i:.......it11111111ttff111
    1111t1,...,;iiii;, ..........::::,.  .,:,......;111111111ttttt111
    11111i..,.,;;;iii;...........:::::.......,....itt1111111111111111
    111111;....::;;ii;...........::::,..........,;1111111111111111111
    1111111, ...,:;;;,............,,:,.....,,:;11tt111111111111111111
    1111111i:,....... ............,,:,.....:1tttttt111111111111111111
    1111111111;.,. ..............;;;:,,....,it11ttt11111111111t111111
    111111111i,..................;ii;:,.....,1t1ttttt1111111111t11111
    111111111:...................;ii;;:......;ttttttttttt11tttt1t1111
    111111111:...................:i;:;;,.....:t1ttttttttttttttttttttt`;
    n[15] = `    tffffLftttfffffffLLfft111ttttt111tfffffffftttttttt11111ttttffffff
    tfffffttffffffLLLfffttt1ttttttt1tffffffffffttttttt1111ttffffffLff
    ftttffttffffffffftttftt1t1iii11111tfffffftttttt11tt111111ttffffLL
    LfttttffLLLfftttttffft11i:,,,::::;1tfffftttfffft11t111tt111ttfffL
    LLffttfLLLfttfffftfft1;:,,,,,,,,,:tttttttffffffftt1111tftt111tttf
    LLLLfttfttttffLfftt1::,,,,,:::::;itfttttffffffffftt111tft1ttftttt
    LLLfttttffftffffttf1,,,,:;iii1111itftttfffffffffftt1111t11ttffttt
    LLLfttfftfffttffffft:,,,:;iii111ii1tttttttffffffftt1111tft1ttt1tf
    LLfftfLLftttfLfffLft:,,:;;;;iiiiii1tffftt11tfffft111111ffftt1t1tt
    fttttfffffttfLLfffft;:::;;;iii;iii1tffffft11tttt11tt111fffttffft1
    ttttttttttttfLLLffffti;;;i;;iii;iitfffffffft1tttt1t1111tfftfffftt
    ffffffffttffttfLftfft1i;;;;;iiiii11ffffftttt1tffft11111tfttfffttt
    ffffffftttfftttftttttt1;;;;;iiiii11ttffft11tttttfftt111tt1tffttff
    fffffffttttttttttfftt11i;;;;;;ii1111ttt111tfft1ttft11111tt1ttttff
    fffffft11ttt1111ttff1;i;;;;;;;ii;iiii111ttfffft11t11111tffttttttt
    ftt1tt1tttft1111tt1;,.:i;;;;;iii::;;,,:;i1tfffft1111111ttttt1ttff
    tttt11ttffft1tti;:,...,ii;;;;ii;::;;.....,:itftt1tt1111tttt1tt1tf
    ftfft1tttft1i;:,.......:11iiii;;;:;:,,,,,,..;t111tt1111ttt11tf1tf
    ttttt11tti;:,..........,1tt1ii11i;;,,.,.,,,,,1111t11111tt111tft1t
    tttt1111;...............:11iiii;;1;.,.,,.,..,1t11111111111t11tf1t
    tt111tt1,................,;;;ii;i1:.........,111t1111111111111t1t
    1111ttt;..................:;;;;:;i:..........itttt11111111ttt111t
    111ttt1:..................,;;;;:::,..,.......;tttt1111111tttffttt
    11tttt;....................:;;::::,,.........:ttttt111111ttttfftt
    11tttt:....................,;:::,:;;;;:,.....:1ttt11111111ttffttt
    11ttt1,.....................:::,,::;iii;,.....itt1111111111tttttt
    11ttt;......................,::,,::;;;i;,.....:111111111tt111tttt
    11tt1:......................,:,..:,:;;i;.......:tttt1111ttt1ttfft
    11tt1:......................,:,..:. .:;:......,itttt1111tt111tttt
    11tt1:...........  .........,,,.,:...........,1tt11tt111111ttt1tt
    1ttti,......... .,..........,,,.,:..........,it11111111111ttft111
    11tt:..........,::;,........,,,.,:......,:i11t11111111111ttttt111
    11111:........:;;ii;.........,,.,,.....i1ttt11t11t111111111111111
    1111ti........,:;;i;,...........,,.....;t111111111111111111111111
    11111ti;,......,:;;;. ......,:,.,:.....,1t1t111111111111111111111
    11111111;........,,,........:;::,,......;t1tttt111111111111111111
    1111111i.........   ........:;;::,......,1ttttt11111111111t111111
    1111111:........ ...........:;;;::.......it1ttttt1111111111t11111
    111111i,........,......... ,ii;;::,......:ttttttttttt11ttt1tt11t1
    11111t;.........,..........:iiii;::,.....,1ttttttttttttttt1ttt1tt`;
    n[16] = `    tfffffftttfffffffLLLft111tttttt11tfffffffftttttttt11111ttttffffff
    tfffffttfffffffffffft11111;:::;;i1tffffffffttttttt1111ttffffffLff
    ftttffttffffffffftttft1;::,,,,,,,,ifffffftttttt11tt111111ttffffLL
    LfttttffLLLfftttttff1;:,,,,,,,,,,:itfffftttfffft11t111tt111ttfffL
    LLffttfLLLfttfffttt1:,,,,:::;;i;;1tttftttffffffftt1111tftt111tttf
    LLLLfttfttttffLfftt;,,,,,:;ii11t11tfttttffffffffftt111tft1ttftttt
    LLLfttttffffffffttt;,,,,:;;;iii1111ttttfffffffffftt1111t11ttffttt
    LLLfttfftfffttttfft:,,,,:;;;iiiiii1tttttttffffffftt1111tft1ttt1tf
    LLfftfffftttfLftfLfi;;;;;;;iii1iii1tffftt11tfffft111111ffftt1t1tt
    fttttfffffttfLLftfffi;;;i;;;;iiiii1fffffft11tttt11tt111fffttffft1
    tttttttttttttffftffft;;;;;;;;iiii1tttfffffft1tttt1t1111tfftfffftt
    ffffffffttftttffftfft1;;;;;;;;iii1ttfffffttt1tffft11111tfttfLfttt
    ffffffftttfftttftttt1i;;;;;;;;ii111tffftt11tttttfftt111tt1tffttff
    ffffffft1tt1111ttt1::i;;;;;;;i1i;i111ttt11tfft1ttft11111tt1ttttff
    ffffftt111tt111i;:,..;i;;i;iii11;;;;,::;1tfffft11t11111tffttttttt
    ttttt111ttt1;:,......,ii;;iii;11;:;;,...,:1fffft1111111ttftt1ttff
    1tt111tt1;:,..........;11iii;1t1;:;;,,,,,.:tfttt1tt1111tttt1tt1tf
    tttt111:..............:1tt1ii11i::;:,,,,,,,if1111tt1111ttt11tf1tf
    tttt11;................:ii;;i;:,,;;,.,,.,..it1111111111tt111tft1t
    tttt1i,............,....:;;;;;;:,1i,..,,,..;ttt11111111111t11tt1t
    tt111;..................,;;;;;:,:1i,.......it111t11t1111111111t1t
    11111,...................:;;;::,,;;,.......it1tttt11111111ttt111t
    111t;....................,;;:::,.:,..,.....:tttttt1111111tttffttt
    11t1,.....................;;:::..:,........,1tttttt111111ttttfftt
    11ti......................::::,..:,.....,:::i1ttt111111111ttffttt
    11t:......................,:::,..:,....,:;iiiitt11111111111tttttt
    111;.......................,:,...:,....:;;iiii1111111111tt111tftt
    11t;...................,,,,,,,...,......,;;ii1111ttt1111ttt1tffft
    11i,.................,::::::,....:........,,:i1111tt1111tt111tttt
    1t;.................,:;;;;;;,....:....  .. .,1t11ttt1111111ttt1tt
    111:................,::::;i:.....:.,..,,,:;i11tttt111111111tft111
    11t1:.   ............::::;:.....,:....it11111tt1tt1111111ttttt111
    11111i:,..............,,,,......,:....:1tt111111t1111111111111111
    11111t11:........,.... .  ..,....:.....it1t111t111111111111111111
    11111111:,..................:....:.....:1ttt11t11t111111111111111
    1111111i,...................:....:......it1ttttt1tt11111111111t11
    1111111;....................,,..,:,.....:tttttttt1111111111111111
    1111111:.................. .::..,:......,1t1ttttt11t1t11111t11111
    11111ti,.................. ,;::,,:.......itttttttttttt111t1tt11t1
    11111t;....................,;;;:,:.......:tttttttttttttttt1ttt1tt`;
    n[17] = `    tffffLftttfffffffffftt11111iii1i11ffffffffttttttt111111tttttfffff
    tffffftttffffffffffttt11;::,,,,,:;1ffffffffttttttt1111ttfffffffLf
    ftttffttffffffffttttt1;:,,,,,,,,,,:tffffftttttt111t111111ttffffLL
    LftttttffLLfttttttft;,,,,,,,,:::,:itfffftttfffft11t111tt111ttfffL
    LLffttfLLLfttfffttt;,,,,,,:;ii1111tttttttffffffftt1111tftt111tttf
    LLLffttfttttffffft1:,,,,,:;iii11111fttttffffffffftt111tft1ttft11t
    LLffttttffftfffftt1:,,,,,:;;;iiiii1ftttfffffffffftt1111t11ttffttt
    LLLfttfttffftttttft::;;::;;iiiiiii1ttttttttfffffftt1111tft1ttt1tf
    LffftfffttttffftfLfi:;i;;;;;iiiiii1tffftt11tfffft111111ffftt1tt1t
    ftttttffffttfLLftfff;:;;;;;;;iiiii1tffffftt1tttt11tt111fffttffft1
    tttttttttttttffffffft;;;;;;;;iiii1ttffffffft1ttt1111111tfftfffftt
    ffffffffttft1tfffttt1i;;;;;;;;iii1ttfffftttt1tffft11111tfttfffttt
    ffffffftttffttttti::i;;;i;;;;ii1111tttttt11tttttfftt111tt1tffttff
    ffffffft1ttt11i;:,.,ii;;iiiii11:i1111tt111tfft1ttft11111tt1ttttff
    ffffftt111i;:,......:11;;iiiii1::;;;::;i1ttffft11t11111tffttttttt
    tt1111ii;:,.........,it1iii;;1ti::;;,..,:1tfffft1111111ttttt11tff
    11111;,..............;1111ii1ti:;:;;,,,,.:tffftt11t1111tttt1tt1tf
    tttti,................:;;;i;;;,,:;;:,,,,,,itt1111tt1111ttt11tf1tf
    tttt:..........,,......:;;;;;;,.,i;,,,,,,.;t111111111111t111tft1t
    ttt1,............,.....,;;;;;:,.:1i,......;11t111111111111t11tt1t
    t11;....................:;;;;:,.:1i,......:tt11111111111111111t1t
    11i,....................,:;:;:.,,;:,......:111tttt11111111tttt11t
    11;......................,;:;:..,:,.......:11tttttt111111tttffttt
    1i,.......................:::,..,:,.......,1tttttttt11111ttttfftt
    1;........................,:::,..:,........;11tttt11111111ttffttt
    1;......................,:;;;;;;,:,........,111tt1111111111tttttt
    1i.....................:::;;;;;:.:,....... ,1t11111111111t111tftt
    1:....................,:::;;;;;.,:,..........,:;iii11111ttt11tfft
    1,....................,:::;;;;,.,:..........   .::;;;;ii11111ttft
    1i................. ....,,,,.....:.... ........,:::;;;;ii111tt1tt
    1ti,.     .........,...   .. ....,..:,..    ....,:::;;;iii1ttt111
    11t1ii;;;,.......................:..,.:1;:,,..   ..,;i1i1t1ttt111
    1111ttttt:,......................:..  ,tttt111i;;;;i1tt1111111111
    111111111:,..................,...:.....it1t1ttttttttt111111111111
    111111111;,..................,...:.... ;tttt11t11t111111111111111
    111111111:...................,..,:.....:ttttttttttt11111111111111
    11111111i,...................:,.,:.....,1ttttttttt111111111111111
    11111111;...................,::..:.....,1ttttttttt1t11t1111t11111
    11111111:.................. :;:,,:......itttttttttttttt111ttt11t1
    111111t1:.................. :;;:::......;ttttttttttttttttt1ttt1tt`;
    n[18] = `    ttffffftttffffffffffft111tt111111ttffffffttttttttt11111tttttfffff
    tffffftttffffffLffftt111i;;:::::;1tffffffffttttttt11111tfffffffLf
    ftttffttffffffffttttt1i;,,,,,,,,,,;fffffftttttt111t111111ttffffLL
    LftttttffLLftttttttti:,,,,,,,,,,,,;tfffftttfffft11t111tt111tttffL
    LLffttfLLffttfffttti,,,,,,:;;;ii;itttttttffffffftt1111tftt1tttttf
    LLLLfttfttttffffft1:,,,,::;i111tt1tfttttffffffffftt111tft1ttft11t
    LLLfttttffftfffftti,,,,,,:;;iiii1i1ftttfffffffffft11111t11ttftttt
    LLLfttfttffftttttf1,,::,:;iiiiiiii1ttttttttfffffftt1111tft1ttt1tt
    fffftfffttttffftfLf;:ii;;;;iii11ii1tfffft11tfffft111111ffft11t1tt
    ttttttffffttfLLftff1:;ii;;;;iiiiii1ffffftt11tttt1ttt111fffttffftt
    tttttttttttttfffffff1;;;;;;;iiiii1tffffffftt1ttt1111111tfftfffftt
    fffffffftttt1tffftft1i;;;;;;;iiii1ttfffffttt1tffft11111tfttfffttt
    ffffffft1tftt1tft1;ii;;;;;;;;ii1111ttftft11tttttfft1111tt1tffttff
    ffffffft1tttt1ii;,.:i;;;i;iii111t111ttt111tffttttftt1111tt1ttttff
    fftfttt111ii;:,....,i1;;iiiii1i:;;;i11111tfffft11t11111tffttttttt
    tt1111ii;:,.........;11iiii;;11;::;;,:;1tftfffft1111111tttt11ttff
    11111:,.............:1tt1iii1t1;;:;:,,.,:1tffftt11t1111ttt11tt1tf
    tttt;................:iiiiii11,:;:;:,,,,.:tttt111tt1111ttt11tf1tf
    ttt1,.................,;;;;:;:.,:i:,,,,,,,it11111111111tt111tft1t
    ttti...................:;;;;;:,,:1;.......;t1tt11111111111t11tf1t
    tt1:...................,;:;;;:..;1;.......:tt111t11t1111111111t1t
    11;.....................:;:;;,..,;:.......,111tttt11111111tttt11t
    11,.....................,::;;,..,:,.......,1ttttttt111111tttffttt
    1;.......................:::;,..,:,........itttttttt1111tttttfftt
    1,.......................,;;;;:,,:,........;11tttt11111111ttffttt
    i,.....................,::;i;;;,,:.........:111tt1111111111tttttt
    i.....................,:::;i;i:.,:,........,1t1111t111111t111ttft
    ;.....................,:::;;;;,.,:..........1tt111tt11111ttt1tfft
    :......................:::::,...,:..........:i1tttt1tt111t1111ttt
    i.......................... ....,,.......... .,,:i11iii11111tt1t1
    1;...     ......................,:............   .,:::;iiii111111
    1t1i;;::::......................,:..,:..   .......,::;;;;;;iii111
    11ttttttt1,.....................,:......:,..    ..,:;;;:;;;iiii11
    111111111i,.................,::..,.... ,tt1ii;,,.. ..,:i;;iii1111
    111111111i,.................,;:,,,......1tttttt11i;;::itt11t11111
    111111111i,................ ,;:::,......it1t1tttttttttt11tt11t111
    111111111;................. ,;;::,......it1tttttttt1111111t111111
    111111111:................. .;;:::......;t1ttttttt1ttttt111t11111
    111111111,...................;i;::,.....;tt1ttttttttttt11tttttttt
    111111111:...................:i;:::.....ittttttttttttttttttttt1tt`;
    n[19] = `    ttffffftttffffffffffft1111tttt111ttffffffttttttttt11111tttttfffff
    tffffftttffffffLffftt11111i;iiii1tfffffffffttttttt11111tfffffffLf
    ftttffttffffffffttttt11;::,,,,,,::1fffffftttttt111t111111ttffffLL
    LftttttffLLftttttttf1;:,,,,,,,,,,,itfffftttfffft11t111tt111tttffL
    LLffttfLLffttfffttt1,,,,,,,::::::itttftttffffffftt1111tftt11t11tf
    LLLLfttfttttffLfft1:,,,,,:;ii11111ffttttffffffffftt111tft1ttft11t
    LLLfttttffftfffftt1:,,,,:;;iii1111fftttfffffffffftt1111111ttftttt
    LLLfttfttffftttttf1,,,,,:;iiii;iii1ttttttttfffffftt1111ttt1ttt1tt
    fffftfffttttffftfLt:;;;:;;iiiiiii11tfffft11tfffft111111ffft1tt1tt
    ttttttffftttfLLftff1;;;i;;;iii1iiitfffffft11tttt1ttt111fffttffftt
    tttttttttttttffftfffi;;;;;;iiiiii1tffffffftt1ttt1111111ffftfffftt
    fffffffftttt1tffftffti;;;;;;iiiii1tttffffttt1tffft11111tfttfffttt
    ffffffftttftt1tftt111i;;;;;;;;ii111tfftft11tttttfft1111tt1tffttff
    ffffffft1tt111111i::i;;;i;;;;i11t111ttt111tffttttftt1111tt1ttttff
    fftfftt111111i;:,..,ii;;iiiii11:;;;111111tfffft11t11111tffttttttt
    tt1111111i;:,.......:11;iiii;11;::;;,:i1tftfffft1111111tttt11ttff
    11111i;:,...........:1t1iii;itt;;;;:.,,,:itffftt11t1111ttt11tt1tf
    tttt1:..............,i111ii1tti:;;;:,,,,.,1tft111tt1111ttt11tf1tf
    tttt;.................:;;;;;;;,.:i:.,,,,,.;t11111111111tt111tft1t
    ttt1,..................:;;;;;:,.:1;.....,.:11tt11111111111t11tf1t
    tt11,..................,;;;;;:,.;1;.......,1t111t11t1111111111ttt
    111;....................::;;;,..,;:.......,i11tttt11111111tttt11t
    11i.....................,::;;,..,:.........ittttttt111111tttffttt
    11,......................::::,..,:,........itttttttt11111ttttfftt
    1;.......................,:::,..,:,........;11tttt11111111ttffttt
    1:........................,:,,..,:,........,111tt1111111111tftttt
    1,.......................,,::,..,:..........it11111t11111t111tttt
    i......................::;;;;;:.,:..........;t11tttt11111tt11tfft
    :....................,:::;i;;i,.,:..........;ttttttt1111111111ttt
    ;....................,:::;i;;:..,,...........:;iii1111111111tt1t1
    1:...................,:::;;;;...,,........... .,:;;;:;i1111ttt111
    11;,..    ...............,,,....,:....  .......,:::::;;11tt111111
    11t11i;;;:.......,.....   ......,,....,,.   ...,::;::;i1111111111
    11111tttti,...................,.,,... :1i:,.    .,,;;i11111111111
    111111111i,...................:,,,.....ittt1i:,.. ,1tttt111111111
    111111111;,...................,,::.... .111tttt1ii1ttt11111111t11
    111111111;....................,:::......it1t11ttttt11111111111111
    111111111;....................,::,......;t1tttttt11tt1tt111t11111
    11111111t:....................::::......:1111ttttttttttt1tt11ttt1
    11111111t:....................:;::,.....,1ttttttttttttttttttttttt`;
    n[20] = `    ttffffftttffffffffffft1111tttt111tfffffffttttttttt11111tttttfffff
    tffffftttffffffLfffttt1111ttttt1tffffffffffttttttt11111tfffffffLf
    ftttftttffffffffttttft1i;:;;;;;i11tfffffftttttt111t111111ttffffLL
    LftttttffLLfttttttfft1;:,,,,,,,,:1ttfffftttfffft11t111tt111tttffL
    LLffttfLLffttfffttti::,,,,,,,,,,;ttttftttffffffftt1111tftt11t11tf
    LLLLfttfttttfffffti,,,,::;;;iiiii1ffttttffffffffftt111tft1ttft11t
    LLLftttttfftfffftt1:,,,;iii1111111fftttfffffffffftt1111111ttftttt
    LLLfttfttffftttttff:,,:;;;iiii1ii1tttttttttfffffftt1111ttt1ttt1tt
    fffttfffttttffftfLt;:,:;;;;iiiiii11tfffft11tfffft11111tffft1tt11t
    ttttttffftttfLLftff1;;;;;iiiii;i11ttfffftt11tttt1ttt11tfffttffft1
    ttttttttttttfffLtfffii;;;;;ii;;iittffffffftt1ttt1111111ffftfffftt
    ffffffffttft1tffftffti;;;;;iiiii1ttttffffttt1tffft11111tfttfffttt
    ffffffftttfttttfttttti;;;;;iiii1111tfftft11ttttffff1111tt1tffttff
    ffffffft1tt11111tft11i;;;;;;;iit11111tt111tffttttft11111tt1ttttff
    fftfftt1111111111i:,;i;;;;;;ii1i;;;111111tfffft11t11111tffttttttt
    tt11t111tttt1i;:,...:1i;ii;ii;1i:;;i;;i1tftfffft1111111tttt11ttff
    111111ttt1;:,,.......;ti;iii;it1;;;;,..,:i1fffft11t1111ttt11tt1tf
    tttt111;:,...........;tt11iii1t1::;;,,,,,.,1ft111tt1111ttt11tf1tf
    tttt11,..............:i11iii111:,;;,,,,,,,.;t1111t11111tt111tft1t
    ttttt;.................:;;;;;;:.,ii,....,,.:1tt11111111111t11tf1t
    tt111:.................,;;i;;;,.,1i,.......:t111111t1111111111ttt
    11111,..................:;;;;;,,,;;,.......:11tttt11111111tttt11t
    1111i...................,;;;;:,..:,........:1tttttt111111tttffttt
    1111:....................:i;;:,.,:,........,1ttttttt1111ttttffftt
    11ti,.....................;;::,..:,........,i1tttt11111111ttffttt
    11t;......................,::,...:,.........;11t11111111111ttt1tt
    11t:......................,::,...:,...,,....it11111111111t111tttt
    111,.......................,,,...:,...,:;;;;itt11ttt1111ttt1ttftt
    11i.........................,,...:,...,:;iiii11111t111111t111tttt
    11,.........................,,...:....,:;;iii11111111111111ttttt1
    11;...................,,,,..,....,......,:;ii1ttt1111111111ttt111
    11t;...............,:::::::..,...:.........,,it11tt1111111tttt111
    1111,.............:::::;;i:......:.....     :1ttttt11111111111111
    11111;,.. ........,::::;;:.......,... ,i;;;i1tttt1111111111111111
    11111t11i,.........,:::;;. ..,:,.:.....itttttttt1111111t111111111
    11111111t;...........,,,.... ,:,,:......it1111ttt1111111111111111
    111111111;..........    .... .:,,:,. ...:tttt11tt1111111111111111
    111111111;....................::::..,,..,1tttttttt1tttt1111t11111
    11111111t;....................::::..,,...;t1tttttttttttt1t11ttttt
    11111111ti....................:;::,......:11ttttttttttttttttttttt`;
    n[21] = `    tfffffftttffffffffffftt11ttttt111tffffffftttttttt11111ttttttfffff
    tffffftttffffffLfffttttt11tttt11tffffffffffttttttt1111ttfffffffLf
    ftttffttffffffffftttft1tttt11ttt1ttfffffftttttt111t111111ttffffLL
    LftttttffLLftttttttfft11iiiiiittt1ttfffffttfffft11t111tt111tttffL
    LLffttfLLffttfffttfft;::,,,,,,:itttttffttffffffftt1111tftt11t11tf
    LLLLfttfttttffffft11i:,,,,,,,,:,;fffttttffffffffftt111tft1ttft11t
    LLLfttttfffttffftt1;:::::;;;iii;:tfftttfffffffffftt1111111ttftttt
    LLLfttfttfLfttttfft;:;iii111111i;1ttttttttffffffftt1111ttt1ttt1tt
    LffftfffttttfffffLf;:;;;;ii1iiiii11tfffft11tfffft11111tffft1tt11t
    ftttttffffttfLLffffi:i;;;;;ii;ii11ttffffft11tttt1ttt11tfffttffft1
    ttttttttttttfLfftffi;ii;ii;i11111tfffffffftt1ttt1111111ffftfffftt
    ffffffffttftttfLftf1;;;;;;;;i1111tttffffftttttffft11111tfttfffttt
    ffffffftttfftttftttt1i;;;;;iiii1111ttftft11ttttffff1111tt1tffttff
    ffffffft1ttt1111tfftt1i;;;;iii1tt111ttt111tffttttft11111tt1ttttff
    ffttftt111t11111ttfft1;;;;;;ii1ti;;i11111ttffft11t11111tfft1ttttt
    tt111111tttt11111tti:i;;;;;;iii1;:;i1i1ttftfffft1111111tttt11ttff
    1t1111ttfftt1tt1i;:..;i;;;;;iii1i:;;:,,:;i1ffftt11t1111ttt11tt1tf
    ttttt1tttttt1i;,.....:11;ii;;;iti:;;,,,...,:1t111tt1111ttt11tf1tf
    ttttt111tti:,....,...,i11iii;i1ti;i,,,,,,,,.,i111t11111tt111tft1t
    tttt1111:,...........,i1t1iii11i,;1,....,,...;t11111111111t11tf1t
    tt111tt;..............,:;i;;;;;,.i1,.........:11111t1111111111ttt
    1111ttt:................,;;i;;:,,:;,.........:tttt11111111tttt11t
    111ttti,................,:;;;;:,.,:..........,ttttt111111tttffttt
    111ttt;..................,;;;::,.,,..........,1tttt111111tttffftt
    11tttt:...................:;;::..::,,.........ittt11111111ttffttt
    11ttt1:...................,;::,,::;;;i;,......;t11111111111ttt1tt
    11ttt1,....................,::,,::;;iii;. ...,it11tt11111t111tttt
    11t1ti.....................,:,,,,::;iii;.....,it11tt1111ttt1ttftt
    11t1ti......................,:,. ,,,:;i:.......;11tt11111t111tttt
    1tttt;......................,,,..,, .,,.......,;11111111111ttttt1
    11ttt:.......................,,..,,.....,....:1ttt111111111ttt111
    11tt1,.......................,,..:,.........:1t11111111111tttt111
    11111;.......    ............,,..:,.....,;ii1t1t11111111111111111
    111111,.... .,::,................:....,11ttt11tt11t11111111111111
    111111;.....;i;;;,...............:,....it1111ttt1tt1111t111111111
    1111111i:.,iii;;i:.......... ,::,:......itttttttt1111111111111111
    111111111i,:;;;ii;,......... ,;;::,.....:1ttttttt11111111111t1111
    111111111i,.,::;;:.......... ,;;;::......itttttttt1tttt11t1tt1111
    111111111i..,.................;;;::,.,,..:1tt1tttttttttttt11ttttt
    111111111i.....  .............;i;:::,.....itttttttttttttt1ttttttt`;
    n[22] = `    tffffLffttfffffffffffttttttttt111tffffffffttttttt111111ttttffffLf
    tffffftttffffffLffffttttttttttt1tffffffffffttttttt1111ttfffffffLf
    ftttffttffffffffftttftttttt11ttt1ttfffffftttttt111t111111ttffffLL
    LftttttfLLLftttttttfftttttttfffft1tffffftttfffft11t111tt111tttffL
    LLffttfLLLfttfffftffft11i;ii1ttffttttffttffffffftt1111tftt11t11tf
    LLLffttfttttffLfLftti;:;:,,,:;;itffftttfffffffffftt111tft1ttft11t
    LLLfttttffftffffftt1;,,,,,,,,::,:tfftttfffffffffftt1111111ttftttt
    LLLfttfftfLftttffff1;::::;;iii;,:1ttttttttffffffftt1111ttt1ttt1tt
    fffftfffftttfLfffLfi;iiii11111i;:i1tfffft11tfffft11111tffft1tt11t
    fttttfffffttfLLffLf;;;;iiiiiiii;:1tfffffft11tttt1ttt11tfffttffft1
    ttttttttttttffLLffLt;;:;;ii;;iii;ttffffffftt1ttt1111111ffftfffftt
    ffffffffttftttfLftf11i;;;i1ii11ii1tfffffftttttffft11111tfttfffttt
    ffffffftttfftttfttt11i;;;;i1111i111ttffft11ttttffft1111tt1tffttff
    ffffffftttttt111tfft11;;;;iiiii1t1111tt111tffttttft11111tt1ttttff
    fffffft111tt1111ttfft1i;;;iiiii1;;;111111ttffft11t11111tfft1ttttt
    tttttt11ttttt111tttft1i;;;;iiiii;;;1t11ttftfffft1111111tttt11ttff
    tttt11tffftt1tt11tff1ii;;;;;iiii:;;i;;i1tttffftt11t1111ttt11tt1tf
    tttft1tttttt1ttt11i;,:i;;;;;iii;;;;:...,,,:;i1111tt1111ttt11tt1tf
    ftttt11tttt1tfti;,...,i1i;;ii;;i1i;,.........,i11111111tt111tft1t
    tttt1111ttt11;:,......;11iii;;1t11;......,.,,.,i1111111111t11tt1t
    tt11ttt11i;:,.........:1tt1i;i1111;............;t11t1111111111ttt
    1111tttt1,.............:;;;;;;;;:;:............:tt11111111tttt11t
    111tt11ti................:;;;;;:,:,............,1tt111111tttffttt
    11tttt1ti................,;;;;::,:,.............ittt11111tttffftt
    11tttttt;.................:;;:::,:,.............:tt1111111ttffttt
    11tttttt;.................,:;:::,:.,:,,.........,it11111111ttt1tt
    11tttttt:..................,::::,:,,;;;;;:,......itt11111t111tttt
    111t1ttt;...................,::,,:,:;;;iii;.....,1tt1111ttt11tftt
    11tt1ttt:...................,::,,:::;;iiii;,.....:i1t1111t111tttt
    1ttttttt:....................::,,:..,,:;ii:...... .1t111111ttttt1
    11tttttt:....................,::,:.   ..::,......,1t1111111ttt111
    11ttt1tt:.... ...............,:,,:..............,1t1111111tttt111
    11111111;;;;:,...............,:,,:....... ...,,:1ttt1111111111111
    11111111iiiiii:...............,,,:........,:i11tt1tt1111111111111
    11111111iiiiiii...............,,,:.......,1tttt11tt1111t111111111
    1111111i;iiiiii,..............,.,:........ittt11t1111111111111111
    111111111iiii;,...............::::,,......:1ttttt11t1111111111111
    1111111111i:,. ...............:i;:::,......itttttt1ttt111t1tt1111
    11111111111:................. :i;;;::,.....;ttttttttttttttt1ttttt
    11111111111:................. :i;;;;::,....:ttttttttttttttttttttt`;
    n[23] = `    tffffLffttfffffffffffttttttttt111tfffffffftttttttt11111tttttfffff
    tfffffttfffffffLffffttttttttttt1tffffffffffttttttt1111ttffffffLLf
    ftttftttffffffffftttfttttt111ttt1ttfffffftttttt111tt11111ttffffLL
    LftttttfLLLftttttttffttttttttffft1tffffftttfffft11tt11tt111tttffL
    LLffttfLLffttfffftfffttttttfffffftfttffttffffffftt1111tftt11t11tf
    LLLffttfttttffffffttft111i;ii1ttfffftttffffffffffft111tft1ttft11t
    LLLfttttffffffffftft1i:::,,,,::;;1fftttfffffffffftt1111111ttftttt
    LLLfttfftfLffftfffLf1;,,,,,,,::,,:1tttttttffffffftt1111ttt1ttt1tt
    fffftfLfftttfffffLLf1;;;;;iiiii:,:1tfffft11tfffft11111tffft1tt11t
    fttttfffffttfLLLffLfiiiii111111i::1tffffft11tttt1ttt11tfffttffft1
    ttttttttttttfffLffLfii;;;iiiiiii;:1ftffffftt1ttt1111111ffftfffftt
    ffffffffttfttffLfffLti;:;;ii;ii1;;ttffffftttttffft11111tfttfffttt
    ffffffftttfftttftttt1i;;;ii11111ii1ttffft11ttttffft1111tt1tffttff
    ffffffftttttt111tfff1ii;;;iiiiiii1111tt111tffttttft11111tt1ttttff
    fffffftt1ttt1111tffft1i;;;iiiiii;;i111111tfffft11t11111tfft1ttttt
    tttttt1ttfft1111tttftt1;;;iiiiii;:;tt11ttftfffft1111111ttttt1ttff
    tttt11tfffft1tt11ttft11;;;;;iiii;;;1t11ttttffftt11t1111tftt1tt1tf
    tttft1ttfffttfft11tftiii;;;;iiii;;;;:;ii1tttft111tt1111ttt11tt1tf
    ttttt11tfftttfttt11i:,ii;;;;;iii;i:.....,,::;i111t11111tt111tft1f
    fttt1111tft1ft1i;:,...;1i;;;;;;i11:...........,;1111111111t11tt1t
    ft11ttt111111;:,......,111ii;;i1t1:........,,...;11t1111111111ttt
    111ttttt11;:,.........,i111i;i1t1;,.............,1t1111111tttt11t
    111ttt11ti,............,::::;;;i;:,..............it111111tttffttt
    11ttttttti...............,;;;;;;;:...............:t111111tttffftt
    11ttttttt;...............,:;;;;:::...............,1t111111ttffttt
    11ttttttt:................,;;;;:::................it1111111ttt1tt
    11ttttttt:................,:;;::::................:t1111tt111tttt
    11111tt1t;.................,::::::................,1t111ttt11tftt
    11ttttttt:.,:;:............,::::::................,itt111t111ttt1
    1tttttttt;:;iii:............,:::::...........,:,....:1t11111tttt1
    11ttttttt;;iiiii:. ..........:::::...........,;;;;:..it1111tft111
    11ttttttt:;iiiii;............,::::,........,::;;iii;it111ttttt111
    111111111:;;iiii;,...........,:,::,.........,;;iiii;it11111111111
    111111111;:;:;;;,............,::::,...........:;;ii;it11111111111
    111111111;::.... .............,:::,,.........  .,,:i1t11111111111
    111111111i;,..................,,,:,,....... .;,..,;11111111111111
    1111111111i;:;i;,..............,,:,,,........1tii11t1111111111111
    111111111111111:..............,:::;;:,.......;ttttttttt11t1tt1111
    11111111111111;,..............:i;;ii;;:,.....,1ttt1tttttttt1ttttt
    1111111111111i,...............,i;;iiii;:......itttttttttttttttttt`;
    n[24] = `    tffffLffttfffffffffffttttttttt111tfffffffftttttttt11111tttttfffff
    tfffffttfffffffLfffftttttttttt11tffffffffffttttttt1111ttfffffffLf
    ftttftttffffffffftttfttttt111ttt1ttfffffftttttt111tt11111ttffffLL
    LftttttfLLLftttttttffttttttttffft1ttfffffttfffft11tt11tt111tttffL
    LLffttfLLLfttfffftffftttttfffffffffttffttffffffftt1111tftt11t11tf
    LLLffttfttttffLffftfftttttfftffffffftttffffffffffft111tft1ttft11t
    LLLfttttffffffffftfftt11iii;:;;i1tfftttfffffffffftt1111111ttftttt
    LLLfttfftfLffttfffLLft1;:::,,,,::;;1ttttttffffffftt1111ttt1ttt1tt
    LLfftfLfftttfLfffLLLfti;,,,,:::::,,;fffft11tfffft11111tffft1tt11t
    fttttfffffttLLLLffLLf1ii;;iiii11i:,;tfffft11tttt1ttt11tfffttffft1
    ttttttttttttfffLffLLf1iiiiiii1111;:;tffffftt1ttt111111tffftfffftt
    ffffffffttfttffLfffLf111;;;ii;;i1i:itfffftttttffft11111tfttfffttt
    fffffffttffftttftttttt1i;;;iii;iii;ifftft11tttttffft111tt1tffttff
    ffffffftttttt111tffft11i;;;ii11111111tt111tffftttft11111tt1ttttff
    fffffftt1ttt1111fffft111i;;;iiiiiii11111ttfffft11111111tfft1ttttt
    tttttt1ttftt1111ttffttt1i;;;iiii;;;1t11ttttfffft1111111ttttt1ttff
    tttt1ttfffftttt11ttft1t1i;;iiiii;:;1t111tttffftt11t1111tftt1tt1tf
    ttfft1tffffttfft11tft111i;;;;;ii;:;i11111ttttt1111t1111ttt11tt1tf
    ftttt11tfftttfttt1ttt1i1i;;;;iiiiii::;i111tt11111t11111tt111tft1f
    fttt1111tfttft11tti;::,i1;;;;;iii11:...,,::;i1tt1111111111t11tt1t
    tt11ttt1111tt11i;,,....;1i;;;;;;i11:.,.......,,:i11t1111111111ttt
    111ttttt111i;:,........;1t1ii;;i1ii,.............;t1111111tttt11t
    111tttttt11:...........:iiiiii1tti,..............,1t11111tttttttt
    11ttttttt1i,.............,:::;;ii;,...............;t11111ttttfftt
    11ttttttt1;..............,:;;;;;;:,...............,1111111ttffttt
    11ttttttt1:.......... ....:;;;;;;:,................it111111tttttt
    11ttttttt1,........,,:;:,.,;;;;;:;,................;t1111t111tttt
    111t1tttt1,.......;;;;;:,..:;;::::,................,1t11ttt11tftt
    11ttttttt1:......;;;;;;;:,.:;;::::,................,it111t1111tt1
    1tttttttti,......:;:;;;:...,:;::::,.................:1t11111tt1t1
    1tttttttti,......:;:;;:.....,:::::,..................:11111ttt111
    1111ttttt;...,,,.,:::. ......:::::,...................,111tttt111
    111111111,,,,,,,.............,:::::,..................,1t11111111
    11111111i,,..:,..............,,::::,,.................,11tt111111
    111111111;...................,:,,::,,.................,;ii11t1111
    111111111i,..................,:::::,,................:::;;;i111t1
    1111111111i;;;;i1:............::,:,,,,...........  ..::;;;;i11111
    111111111111111t1,............,.,:,,,:,,........:,,..,:;;;i11t111
    1111111111111111i.............,,::;;;i;:,...... :111i;::;;;1ttttt
    111111111111111ti.............:1;;1iiii;:,.......i1tttt11111tt1tt`;
    n[25] = `    tffffLffttfffffffffffttttttttt111tfffffffftttttttt11111tttttfffff
    tfffffttfffffffLfffftttttttttt11tffffffffffttttttt11111tfffffffff
    ftttffttffffffffftttfttttt111ttt1ttfffffftttttt11tt111111ttffffLL
    LftttttfLLLfttttttffffttttttfffft1tffffffttfffft11t111tt111tttffL
    LLffttfLLLfttfffftfffttttttfffffftfttfftffffffffttt111tftt11t11tf
    LLLffttfttttffLLfftffttttffffffffffftttfffffffffftt111tft1ttft11t
    LLLfttttffffffLLftffttttttt11i;ii1tftttfffffffffftt1111111ttftttt
    LLLfttfftfffffffffLLfttt1i;::,,,,:;;1tttttffffffftt1111ttt1ttt1tt
    LLfftfLfftttfLfffLLLLttt1;,,,,,,,::,:iftt11tfffft11111tffft1tt11t
    fttttfffffttLLLLfLLLftt1i;;;;;;iiii:,;fftt11tttt1ttt11tfffttffft1
    ttttttttttttffLLffLLftt1;iiiii11111i::tfffft1ttt111111tffftfffftt
    ffffffffttfttffLfffLftt1;i;;;iiiiiii;;tfftttttffft11111tfttfffttt
    fffffffftffftttfttftttttii;;;;ii;;ii;iftt11tttttfft1111tt1tffttff
    ffffffftttttt11ttfffttt11ii;;ii1111ii11111tffftttftt1111tt1ttttff
    fffffftt1ttt111tffffttt1i1i;;;iiiiii1111ttfffft11t11111tfft1ttttt
    tttttt1ttfff1111ttffttttt1i;;;;i;:;it11ttftfffft1111111ttttt1ttff
    tttt11tfffftttt11tfftt11tt1;;;ii;;;1t111tttffftt11t1111tttt1tt1tf
    ttfft1tffffttfftt1tft1111t1;;;;i;:;i11111tttft111tt1111ttt11tt1tf
    ftfft11tfffttfttttttt11111i;;:;iiii1i;i1t1tt11111t11111tt111tft1f
    fttt1111tfttft11tt1t1i;;;1i;;;;ii1ii1,.,:;ii1tt11111111111t11tt1t
    tt11ttt11t1t11tt11i:,...,11;;;;;it111,,.....,:;i11tt1111111111ttt
    111ttftt111111i;:,......:1t1i;;;;i1t1,..........,:i1111111tttt11t
    111ttttt111tt;..........:1111iii1;11:.............,it1111tttttt1t
    11ttttttt11t1,...........,,:::;;i;;:...............:t1111ttttfft1
    11ttttttt111i..............:;:::;;::...............,1t1111ttffttt
    11ttttttt111:..............,;;;;;;:,................;t11111ttt1t1
    11ttttttt11i,..........,::::;;;;;;:,................,1t11t111tttt
    11tt1tttt11i.........:;;;;:,;;::::::.................;t1ttt11tftt
    11ttttttt111,.......;;;;;;:,:;::::::,................:tttt1111tt1
    1tttttttt11;,......,;;;;;;:::;::::::,................,itt111t11t1
    1tttttttt11;,......:;;;;i;...,:::::,,.................:tt1tttt111
    1tttttttt1;,.,.....,:;:......,:::::,,..................it1tttt111
    1111111111:,,,......,,. .....,,::::,,..................,1t1111111
    1111111111,,....,,...........,,,:::::,..................itt111111
    1111111111;,.................,:::::::,,................:1tt111111
    11111111111:....  ............,:::,:,,.................,1tt111111
    11111111111ii;;;;;i, .........,,::,,,,,................,:;;1tt111
    11111111111111111t1,..........,,,:,,:,:,,. ...........,:::;;i11tt
    11111111111111111t;.............,:::;;;;:,........  .,:::;;:;i1t1
    111111111111111111:...........,;;;i1iiii;:,.......::,,::::;;i1ttt`;
    n[26] = `    tffffLffttfffffffLfffttttttttt111tfffffffftttttttt11111ttttttffff
    tfffffttfffffffLfffftttttttttt11tffffffffffttttttt11111tfffffffff
    ftttffttffffffffftttfttttt111ttt1ttfffffftttttt11tt111111ttffffLL
    LftttttfLLLfttttttffLftttttttffft1ttfffffttfffft11t111tt111tttffL
    LLffttfLLLfttfffftfLfttttttffffffffftftttfffffffttt111tftt11t11tf
    LLLffttfttttfLLLfftffttttffftt1iii11tttfffffffffftt111tft1ttft11t
    LLLfttttffffffLffffftttttfti;;::,,,:;i1tffffffffftt1111111ttftttt
    LLLfttfftfLfffffffLLfttttt1;,,,,,,,::,:ittffffffftt1111ttt1ttt1tf
    LLfftfLfftttfLfffLLLLfttt1i;:::;;iiii;,;t11tfffft11111tffft1tt1tt
    fttttfffffttLLLLfLLLffttf1;;iiii11111i::1t11tttt1ttt11tfffttffttt
    ttttttttttttfffLffLLftttti:;;;;iiiiiii;;tftt1ttt111111tffftfffftt
    ffffffffttfttffLfffLfttttti;;;;;iii;i1iiftttttffft11111tfttfffttt
    fffffffftfffftffffftttttft11i;;;iiii1iiit11tttttfft1111tt11ffttff
    ffffffftttttt1tttffftttttti1i;;;ii11iii111tffftttftt1111tt1ttttff
    fffffftt1ttt1111tfffftttt111i;;iiiiii111ttfffft11t11111tffttttttt
    tttttt1ttfftttt1ttfftttttt111i;i;:;ii11ttftfffft1111111ttttt1ttff
    tttt11tfffftttt11tfftt1ttt111;;i;;;iii1ttttffftt11t1111ttt11tt1tf
    tttft1tffffttffttttft111ttt11;;;;:;i1i1;;11tft111tt1111tt111tt1tf
    ftfft11tfftttffttttft1111iii1;;;i;iiii1i,,,:;;i11tt1111tt111tft1f
    fttt1111tfttft11tt1t1i;:,,,;1i;;i1ii;iti,,.....,:;i1t11111t11tt1t
    ft11ttt11tttt1tt11i;:,.....;11i;i1i;1tt;,,.........,:i11111111t1t
    111ttttt11111tft;,.........;11111i1ttti,.............,1111tttt111
    111tttttt11tfff1,...........,:;;;;;11i:...............itttttttt1t
    11ttttttt11tfffi............ ,:;;;;;;;,...............;t1ttttfft1
    11tttttttttt1tf;..............:;;;;;;;,...............:111ttttttt
    11ttttttt11t111:..............:;;;;;::,...............,1t11ttt1t1
    11ttttttt11ttt1:..............,;;;::;::................itt111tttt
    11ttttttt1ttfft:..............,;;;;::::................:1tt11tft1
    1tttttttt1tttt1;.,::,..........:;:::;::,...............,1t1111tt1
    1ttttttttt1ttt1;,:;;:..........,::::::,,................it1111111
    1tttttttttttttiiiiii;,.........,:::::::,................:ttttt111
    1tttttttt1ttt1;;;;ii;,.........,:::::::,.................ittttt11
    11111111111tt1;;;;ii;...........::::::::................ :1t11111
    11111111111tt1;::;;i:...........,:::::::,...............,itttt111
    11111111tttttt;,,,::............,::::::,,...............ittttt111
    1111111111tttt1:,,..............,:::::,,,,.......,:;::,:1t1111111
    11111111111111111i;;i:..........,:,,,.,,.,.......::;;i;it1ttt1111
    1111111111111111111ti...........,,.,:,:;::,......,:;;ii1ttttt1111
    1111111111111111111t;...........,;iiiiiii;:,......:;;;i1ttttt111t
    11111111111111111111:...........,;i11iiii;:,.......,:i1tttttt1ttt`;

    for (var x = 0; x < 60; x++) {
        for (var i = 0; i < n.length; i++) {
            console.clear();
            console.log(n[i]);
            await sleep(100);
        }
    }
}

neverGonnaGiveYouUp();
