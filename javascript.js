let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let content = document.getElementById("content");

arabic.onclick = ()=>{
   setLanguage("arabic");
   localStorage.setItem("lang","arabic");
};

english.onclick = ()=>{
    setLanguage("english");
    localStorage.setItem("lang","english");
 };

onload = ()=>{
    setLanguage(localStorage.getItem("lang"));
}



function setLanguage(getLanguage) {
    if (getLanguage=="arabic") {
        content.innerHTML=`
        <h1 id="name">ARABIC TOURISM</h1>
        <h2  class="titles">مرحبا بكم في موقعي الرائع</h2>
        <p  class="welcomePar">أهلا بكم في الموقعي حيث ستتعرفون على اماكن سياحية رائعة في الوطن العربي
        <br> و معلومات سوف تساعدكم في زيارة تلك الأماكن</p>

        <br>

        <h2 class="titles">كيفية استعمال الموقع </h2>
        <p  class="welcomePar">عند الضغط على زر الدول سوف تظهر لكم الدول العربية  و عند الضغط على اسم الدولة <br> سوف يظهر لكم الأماكن السياحية , و عند النزول الى اسفل هذه الصفحة  سوف تجدون <br> معلومات عن الموقع  كما يمكنكم ارسال اقتراحتك و ارآكم من قسم  تواصل معنا و أيضا يمكنكم تغيير <br> اللغة  من زر اللغة
        </p>


        <hr id="hr">
        <div id="aboutUs">
        <h1 class="Title">ABOUT US</h1>
        <div class="imgs">
        <img src="./imgs/logo1.png" alt="" id="img1">
        <img src="./imgs/logo.png" alt="" id="img2">
        </div>
        <span id="span">(شعارنا)</span>
        <p id="par">موقعي يتيح لك التعرف على الأماكن السياحية <br> في الدول العربية مع التقييم الخاص بها و اسعار <br> تذاكر الدخول في مكان واحد, كما نطمح في <br> المستقبل لإضافة باقي الدول العربية و إضافة <br> المزيد  من الأماكن السياحية مع المزيد من <br> المعلومات  مع إضافة المزيد من الأقسام
        </p> 
        </div>

        <hr id="hr1">

        <div id="contactUs">
        <h1 id="Title">CONTACT US</h1>

         <form
         action="https://formsubmit.co/jojomohamed288@gmail.com"
         method="POST"
        >
        <div class="field nAme hvr-shadow-radial">
         <input
         type="text"
         name="Name"
         id="nAme"
         class="input"
         placeholder="اسمك"
         required
         />
         <label class="test" for="name">اسمك</label>
         </div>
         
     

         <div class="field email-box hvr-shadow-radial">
         <input
         type="text"
         id="email"
         name="email"
         class="input"
         placeholder="name@email.com"
         required
         />
         <label  class="test" for="email">بريدك </label>
         </div>
         
 

         <div class="field msg-box hvr-shadow-radial">
         <input
         type="text"
         id="message"
         name="msg"
         class="input"
         placeholder="رسالتك او اقتراحك"
         ></input>
         <label  class="test" for="msg">الرسالة</label>
         </div>
        
         <button id="send" class="hvr-bob hvr-float-shadow">أرسال</button>
 
        </div>
 

        `
    }
    else if (getLanguage=="english") {
        content.innerHTML=`
        <h1 id="name">ARABIC TOURISM</h1>
        <h2  class="TITLES">Welcome To My Amazing Website</h2>
        <p  class="PAR">Welcome to my site, where you will learn about wonderful <br> tourist places in the Arab world. 
        </p>

        <br>

        <h2  class="TITLES">How To Use </h2>
        <p  class="PAR">Once you click on the countries button, the Arab countries will appear,<br>  and then  if you clicked on the country's name will appear the tourist <br> places in the country, and when you scroll down this page you will find <br> information about the site. You can also send your suggestion and <br> your opinions from the Contact Us section, and you can also <br> change
        Language from the Language button
        
        </p>

        <hr id="hr">
        <div id="aboutUs">
        <h1 class="Title">ABOUT US</h1>
        <div class="IMGS">
        <img src="./imgs/logo1.png" alt="" id="IMG1">
        <img src="./imgs/logo.png" alt="" id="IMG2">
        </div>
        <span id="sPan">(our logos)</span>
        <p id="pAr">My site allows you to know about the <br> tourist places
        in the Arab countries with <br>  their own evaluation and 
        entry tickets <br>  prices in one place, as we aspire to
        the <br>  future to add the rest of the Arab<br>  countries and add more tourist places 
        <br> with more Information and more sections
         
        </p>    
        </div>

        <hr id="hr1">

        <div id="contactUs">
        <h1 id="Title">CONTACT US</h1>

         <form
         action="https://formsubmit.co/jojomohamed288@gmail.com"
         method="POST"
        >
        <div class="field nAme hvr-shadow-radial">
         <input
         type="text"
         name="Name"
         id="nAme"
         class="Input"
         placeholder="Type Your Name"
         required
         />
         <label class="Test" for="name"> Name</label>
         </div>
         
     

         <div class="field email-box hvr-shadow-radial">
         <input
         type="text"
         id="email"
         name="email"
         class="Input"
         placeholder="name@email.com"
         required
         />
         <label  class="Test" for="email">Email </label>
         </div>
         
 

         <div class="field msg-box hvr-shadow-radial">
         <input
         type="text"
         id="message"
         name="msg"
         class="Input"
         placeholder="Your suggestion or msg"
         ></input>
         <label  class="Test" for="msg">message</label>
         </div>
        

         <button id="Send" class="hvr-bob hvr-float-shadow">send</button>
 
        </div>
 

        `  
    
    }
}

