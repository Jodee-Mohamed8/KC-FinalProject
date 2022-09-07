let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let container = document.getElementById("container");


onload = ()=>{
    setLanguage(localStorage.getItem("lang"));
}



function setLanguage(getLanguage) {
    if (getLanguage=="arabic") {
        container.innerHTML=`
           <div class="box" data-aos="fade-up">
              <div>
                 <img class="flags" src="./imgs/Jordan.png" alt="jordan flag">
              </div>
               
              <h1  style="text-align: right; margin-left: -110px;" > <a href="./jordan.html" class="name" >المملكة الأردنية الهاشمية</a></h1>
              <h1 class="con" style="margin-left: -530px;">قارة آسيا</h1>
              <h2 class="cur" style="margin-left: -355px;">الدينار الأردني</h2>
           </div>

           <div class="box"  data-aos="fade-up">
           <div>
              <img class="flags" src="./imgs/emarites.png" alt="">
           </div>
            
           <h1  style="text-align: right;margin-left: -110px;" > <a href="./emarites.html" class="name">الإمارات العربية المتحدة</a></h1>
           <h1 class="con" style="margin-left: -530px;">قارة آسيا</h1>
           <h2 class="cur" style="margin-left: -370px;">الدرهم الإمراتي</h2>
           </div>

           <div class="box"  data-aos="fade-up">
            <div>
               <img class="flags" src="./imgs/Bahrain.png" alt="">
            </div>
             
            <h1 style="text-align: right; margin-left: -110px;"> <a href="./bahrain.html" class="name">مملكة البحرين</a></h1>
            <h1 class="con" style="margin-left: -530px;">قارة آسيا</h1>
            <h2 class="cur" style="margin-left: -360px;">الدينار البحريني</h2>
           </div>

          <div class="box"  data-aos="fade-up">
            <div>
               <img class="flags" src="./imgs/algeria.png" alt="">
            </div>
             
            <h1 style="text-align: right; margin-left: -110px;"> <a href="./algeria.html" class="name">جمهورية الجزائر</a></h1>
            <h1 class="con" style="margin-left: -557px;">قارة أفريقيا</h1>
            <h2 class="cur" style="margin-left: -357px;">الدينار الجزائري</h2>
          </div>

         <div class="box"  data-aos="fade-up">
         <div>
            <img class="flags" src="./imgs/saudi-arabia.png" alt="">
         </div>
          
         <h1 style="text-align: right; margin-left: -110px;"> <a href="./saudi.html" class="name">المملكة العربية السعودية</a></h1>
         <h1 class="con" style="margin-left: -530px;">قارة آسيا</h1>
         <h2 class="cur" style="margin-left: -367px;">الريال السعودي</h2>
         </div>

        <div class="box"  data-aos="fade-up">
         <div>
           <img class="flags" src="./imgs/kuwait.png" alt="">
         </div>
       
         <h1 style="text-align: right; margin-left: -110px;"> <a href="./kuwait.html" class="name">دولة الكويت</a></h1>
         <h1 class="con" style="margin-left: -530px;">قارة آسيا</h1>
         <h2 class="cur" style="margin-left: -355px;">الدينار الكويتي</h2>
         </div>

        <div class="box"  data-aos="fade-up">
         <div>
           <img class="flags" src="./imgs/morocco.png" alt="">
         </div>
    
         <h1 style="text-align: right; margin-left: -110px;"> <a href="./morocco.html" class="name">الجمهورية المغربية</a></h1>
         <h1 class="con" style="margin-left: -557px;">قارة أفريقيا</h1>
         <h2 class="cur" style="margin-left: -357px;">الدرهم المغربي</h2>
         </div>

         <div class="box"  data-aos="fade-up">
            <div>
               <img class="flags" src="./imgs/tunisia.png" alt="">
            </div>
             
            <h1 style="text-align: right; margin-left: -110px;"> <a href="./tunisia.html" class="name">الجمهورية التونيسية</a></h1>
            <h1 class="con" style="margin-left: -557px;">قارة أفريقيا</h1>
            <h2 class="cur" style="margin-left: -357px;">الدينار التونسي</h2>
         </div>

         <div class="box"  data-aos="fade-up">
         <div>
            <img class="flags" src="./imgs/oman.png" alt="">
         </div>
          
         <h1 style="text-align: right; margin-left: -110px;"> <a href="./oman.html" class="name">سلطنة عمان</a></h1>
         <h1 class="con" style="margin-left: -530px;">قارة آسيا</h1>
         <h2 class="cur" style="margin-left: -340px;">الريال العماني</h2>
         </div>

         <div class="box"  data-aos="fade-up">
            <div>
               <img class="flags" src="./imgs/palestine.png" alt="">
            </div>
             
            <h1 style="text-align: right; margin-left: -110px;"> <a href="./palestine.html" class="name">فلسطين</a></h1>
            <h1 class="con" style="margin-left: -530px;">قارة آسيا</h1>
            <h2 class="cur" style="margin-left: -380px;">الجنيه الفلسطيني</h2>
         </div>

         <div class="box"  data-aos="fade-up">
            <div>
               <img class="flags" src="./imgs/lebanon.png" alt="">
            </div>
             
            <h1 style="text-align: right; margin-left: -110px;"> <a href="./lebanon.html" class="name">الجمهورية اللبنانية</a></h1>
            <h1 class="con" style="margin-left: -530px;">قارة آسيا</h1>
            <h2 class="cur" style="margin-left: -330px;">الليرة اللبنانية</h2>
         </div>

         <div class="box"  data-aos="fade-up">
         <div>
            <img class="flags" src="./imgs/egypt.png" alt="">
         </div>
          
         <h1 style="text-align: right; margin-left: -110px;"> <a href="./egypt.html" class="name">جمهورية مصر العربية</a></h1>
         <h1 class="con" style="margin-left: -557px;">قارة أفريقيا</h1>
         <h2 class="cur" style="margin-left: -335px;">الجنيه المصري</h2>
         </div>

         <div class="box"  data-aos="fade-up">
         <div>
            <img class="flags" src="./imgs/qatar.png" alt="">
         </div>
          
         <h1 style="text-align: right; margin-left: -110px;"> <a href="./qatar.html" class="name">دولة قطر</a></h1>
         <h1 class="con" style="margin-left: -530px;">قارة آسيا</h1>
         </div>

         <div class="box"  data-aos="fade-up">
         <div>
            <img class="flags" src="./imgs/sudan.png" alt="">
         </div>
          
         <h1 style="text-align: right; margin-left: -110px;"> <a href="" class="name">جمهورية السودان</a></h1>
         <h7 class="notnow">سوف تتم اضافتها لاحقا</h7>
         <h1 class="con" style="margin-left: -715px;">قارة أفريقا</h1>
         <h2 class="cur" style="margin-left: -355px;">الجنيه السوداني</h2>
      </div>

      <div class="box"  data-aos="fade-up">
         <div>
            <img class="flags" src="./imgs/somalia.png" alt="">
         </div>
          
         <h1 style="text-align: right; margin-left: -110px;"> <a href="" class="name">الصومال</a></h1>
         <span class="notnow">سوف تتم اضافتها لاحقا</span>
         <h1 class="con" style="margin-left: -715px;">قارة أفريقا</h1>
         <h2 class="cur" style="margin-left: -355px;">الشلن الصومالي</h2>
      </div>

      <div class="box"  data-aos="fade-up">
         <div>
            <img class="flags" src="./imgs/iraq.png" alt="">
         </div>
          
         <h1 style="text-align: right; margin-left: -110px;"> <a href="" class="name">جمهورية العراق</a></h1>
         <span class="notnow">سوف تتم اضافتها لاحقا</span>
         <h1 class="con" style="margin-left: -695px;">قارة آسيا</h1>
         <h2 class="cur" style="margin-left: -333px;">الدينار العراقي</h2>
      </div>

      <div class="box"  data-aos="fade-up">
         <div>
            <img class="flags" src="./imgs/yemen.png" alt="">
         </div>
          
         <h1 style="text-align: right; margin-left: -110px;"> <a href="" class="name">الجمهورية اليمنية</a></h1>
         <span class="notnow">سوف تتم اضافتها لاحقا</span>
         <h1 class="con" style="margin-left: -695px;">قارة آسيا</h1>
         <h2 class="cur" style="margin-left: -315px;">الريال اليمني</h2>
      </div>

      <div class="box"  data-aos="fade-up">
         <div>
            <img class="flags" src="./imgs/comoros.png" alt="">
         </div>
          
         <h1 style="text-align: right; margin-left: -110px;"> <a href="" class="name">جزر القمر</a></h1>
         <span class="notnow">سوف تتم اضافتها لاحقا</span>
         <h1 class="con" style="margin-left: -715px;">قارة أفريقا</h1>
         <h2 class="cur" style="margin-left: -322px;">الفرنك القمري</h2>
      </div>

      <div class="box"  data-aos="fade-up">
         <div>
            <img class="flags" src="./imgs/djibouti.png" alt="">
         </div>
          
         <h1 style="text-align: right; margin-left: -110px;"> <a href="" class="name">جمهورية جيبوتي</a></h1>
         <span class="notnow">سوف تتم اضافتها لاحقا</span>
         <h1 class="con" style="margin-left: -715px;">قارة أفريقا</h1>
         <h2 class="cur" style="margin-left: -338px;">الفرنك الجيبوتي</h2>
      </div>

      <div class="box"  data-aos="fade-up">
         <div>
            <img class="flags" src="./imgs/syria.png" alt="">
         </div>
          
         <h1 style="text-align: right; margin-left: -110px;"> <a href="" class="name">سوريا</a></h1>
         <span class="notnow">سوف تتم اضافتها لاحقا</span>
         <h1 class="con" style="margin-left: -695px;">قارة آسيا</h1>
         <h2 class="cur" style="margin-left: -320px;">الريال السوري</h2>
      </div>

      <div class="box"  data-aos="fade-up">
         <div>
            <img class="flags" src="./imgs/libya.png" alt="">
         </div>
          
         <h1 style="text-align: right; margin-left: -110px;"> <a href="" class="name">ليبيا</a></h1>
         <span class="notnow">سوف تتم اضافتها لاحقا</span>
         <h1 class="con" style="margin-left: -715px;">قارة أفريقا</h1>
         <h2 class="cur" style="margin-left: -305px;">الدينار الليبي</h2>
      </div>

      <div class="box"  data-aos="fade-up">
         <div>
            <img class="flags" src="./imgs/mauritania.png" alt="">
         </div>
          
         <h1 style="text-align: right; margin-left: -110px;"> <a href="" class="name">جمهورية موريتانيا</a></h1>
         <span class="notnow">سوف تتم اضافتها لاحقا</span>
         <h1 class="con" style="margin-left: -715px;">قارة أفريقا</h1>
         <h2 class="cur" style="margin-left: -350px;">الأوقية الموريتانيا</h2>
      </div>


        `
    }
    else if (getLanguage=="english") {
        container.innerHTML=`
        <div class="box" data-aos="fade-down">
        <div>
           <img class="FLAGS" src="./imgs/Jordan.png" alt="jordan flag">
        </div>
         
        <h1  style="text-align: left;" > <a href="./jordan.html" class="NAME" >Jordan</a></h1>
        <h1 class="CON" > Asia</h1>
        <h2 class="CUR" >JOD</h2>
     </div>

     <div class="box" data-aos="fade-down">
        <div>
           <img class="FLAGS" src="./imgs/emarites.png" alt="">
        </div>
         
        <h1  style="text-align: left;" > <a href="./emarites.html" class="NAME" >The United <br><span style="margin-left:46px"> Arab Emirates</a></span></h1>
        <h1 class="CON" style="margin-left:80px;"> Asia</h1>
        <h2 class="CUR" >AED</h2>
     </div>

     <div class="box" data-aos="fade-down">
        <div>
           <img class="FLAGS" src="./imgs/bahrain.png" alt="">
        </div>
         
        <h1  style="text-align: left;" > <a href="./bahrain.html" class="NAME" >Bahrain</a></h1>
        <h1 class="CON" style="margin-left:185px;"> Asia</h1>
        <h2 class="CUR" >BHD</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/algeria.png" alt="">
     </div>
      
     <h1  style="text-align: left;" > <a href="./algeria.html" class="NAME" >Algeria</a></h1>
     <h1 class="CON" style="margin-left:186px;"> Africa</h1>
     <h2 class="CUR" style="margin-left:244px;">DZD</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/saudi-arabia.png" alt="">
     </div>
   
     <h1  style="text-align: left;" > <a href="./saudi.html" class="NAME" >Saudi Arabia</a></h1>
     <h1 class="CON" style="margin-left:90px;"> Asia</h1>
     <h2 class="CUR" style="margin-left:277px;">SAR</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/kuwait.png" alt="">
     </div>
   
     <h1  style="text-align: left;" > <a href="./kuwait.html" class="NAME" >Kuwait</a></h1>
     <h1 class="CON" style="margin-left:190px;"> Asia</h1>
     <h2 class="CUR" style="margin-left:277px;">KWD</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/morocco.png" alt="">
     </div>
   
     <h1  style="text-align: left;" > <a href="./morocco.html" class="NAME" >Morocco</a></h1>
     <h1 class="CON" style="margin-left:156px;"> Africa</h1>
     <h2 class="CUR" style="margin-left:251px;">MAD</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/tunisia.png" alt="">
     </div>
   
     <h1  style="text-align: left;" > <a href="./tunisia.html" class="NAME" >Tunisia</a></h1>
     <h1 class="CON" style="margin-left:170px;"> Africa</h1>
     <h2 class="CUR" style="margin-left:262px;">TND</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/oman.png" alt="">
     </div>
   
     <h1  style="text-align: left;" > <a href="./oman.html" class="NAME" >Oman</a></h1>
     <h1 class="CON" style="margin-left:185px;">Asia</h1>
     <h2 class="CUR" style="margin-left:299px;">OMR</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/palestine.png" alt="">
     </div>
   
     <h1  style="text-align: left;" > <a href="./palestine.html" class="NAME" >Palestine</a></h1>
     <h1 class="CON" style="margin-left:132px;">Asia</h1>
     <h2 class="CUR" style="margin-left:299px;">PP</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/lebanon.png" alt="">
     </div>
   
     <h1  style="text-align: left;" > <a href="./lebanon.html" class="NAME" >Lebanon</a></h1>
     <h1 class="CON" style="margin-left:132px;">Asia</h1>
     <h2 class="CUR" style="margin-left:313px;">LBP</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/egypt.png" alt="">
     </div>
   
     <h1  style="text-align: left;" > <a href="./egypt.html" class="NAME" >Egypt</a></h1>
     <h1 class="CON" style="margin-left:165px;">Africa</h1>
     <h2 class="CUR" style="margin-left:284px;">EGP</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/qatar.png" alt="">
     </div>
   
     <h1  style="text-align: left;" > <a href="./qatar.html" class="NAME" >QATAR</a></h1>
     <h1 class="CON" style="margin-left:132px;">Asia</h1>
     <h2 class="CUR" style="margin-left:316px;">QAR</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/sudan.png" alt="">
     </div>
      
     <h1 style="text-align: left;> <a href="" class="NAME"> Sudan</a></h1>
     <h7 class="NOTNOW">SOON</h7>
     <h1 class="CON" style="margin-left: 100px;">Africa </h1>
     <h2 class="CUR" style="margin-left: 290px;"> SDG</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/somalia.png" alt="">
     </div>
      
     <h1 style="text-align: left;> <a href="" class="NAME"> Somalia</a></h1>
     <h7 class="NOTNOW" style="right:87px">SOON</h7>
     <h1 class="CON" style="margin-left: 73px;">Africa </h1>
     <h2 class="CUR" style="margin-left: 290px;"> SOS</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/iraq.png" alt="">
     </div>
      
     <h1 style="text-align: left;> <a href="" class="NAME">Iraq</a></h1>
     <h7 class="NOTNOW" style="right:61px">SOON</h7>
     <h1 class="CON" style="margin-left: 123px;">Asia </h1>
     <h2 class="CUR" style="margin-left: 330px;">IQD</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/yemen.png" alt="">
     </div>
      
     <h1 style="text-align: left;> <a href="" class="NAME">Yemen</a></h1>
     <h7 class="NOTNOW" style="right:74px">SOON</h7>
     <h1 class="CON" style="margin-left: 90px;">Asia </h1>
     <h2 class="CUR" style="margin-left: 330px;">YER</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/comoros.png" alt="">
     </div>
      
     <h1 style="text-align: left;> <a href="" class="NAME">Comoros</a></h1>
     <h7 class="NOTNOW" style="right:90px">SOON</h7>
     <h1 class="CON" style="margin-left: 60px;">Africa </h1>
     <h2 class="CUR" style="margin-left: 305px;">KMF</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/djibouti.png" alt="">
     </div>
      
     <h1 style="text-align: left;> <a href="" class="NAME">Djibouti</a></h1>
     <h7 class="NOTNOW" style="right:90px">SOON</h7>
     <h1 class="CON" style="margin-left: 63px;">Africa </h1>
     <h2 class="CUR" style="margin-left: 308px;">FDJ</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/syria.png" alt="">
     </div>
      
     <h1 style="text-align: left;> <a href="" class="NAME">Syria</a></h1>
     <h7 class="NOTNOW" style="right:63px">SOON</h7>
     <h1 class="CON" style="margin-left: 100px;">Asia </h1>
     <h2 class="CUR" style="margin-left: 345px;">SYP</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/libya.png" alt="">
     </div>
      
     <h1 style="text-align: left;> <a href="" class="NAME">Libya</a></h1>
     <h7 class="NOTNOW" style="right:70px">SOON</h7>
     <h1 class="CON" style="margin-left: 95px;">Africa </h1>
     <h2 class="CUR" style="margin-left: 322px;">LBP</h2>
     </div>

     <div class="box" data-aos="fade-down">
     <div>
        <img class="FLAGS" src="./imgs/mauritania.png" alt="">
     </div>
      
     <h1 style="text-align: left;> <a href="" class="NAME">Mauritania</a></h1>
     <h7 class="NOTNOW" style="right:115px">SOON</h7>
     <h1 class="CON" style="margin-left: 15px;">Africa </h1>
     <h2 class="CUR" style="margin-left: 321px;">MRO</h2>
     </div>
        
        `  

        
    
    }
}

AOS.init();
