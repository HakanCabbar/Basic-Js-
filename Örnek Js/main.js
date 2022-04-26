const reviews = [
    {
      id: 1,
      name: "Berke Canbay",
      job: "Backend Developer",
      img:
        "https://res.cloudinary.com/hakancabbar/image/upload/v1650402923/Project/BERKE_CANBAY_ssgsey.jpg",
      text:
        "Ben Berke Canbay, Backend Developerım. Java programlama dilini öğrenmeye çalışıyorum.",
    },
    {
      id: 2,
      name: "Hakan Cabbar",
      job: "Frontend Developer",
      img:
        "https://res.cloudinary.com/hakancabbar/image/upload/v1650402661/Project/WhatsApp_Image_2021-08-25_at_21.16.56_owcllw.jpg",
      text:
        "Selamlar herkese ben Hakan Cabbar, frontend developerım. Javascript Css Html ve Typescript öğreniyorum.",
    },
    {
      id: 3,
      name: "Şakir Uçar",
      job: "UI UX Tasarımcısı",
      img:
        "https://res.cloudinary.com/hakancabbar/image/upload/v1650402924/Project/ŞAKİR_UÇAR_gwrng4.png",
      text:
        "Ben Şakir Uçar.UI VE UX Geliştirmeleri ve tasarımlarıyla uğraşıyorum. Bu sene mezun olacağım.",
    },
    {
      id: 4,
      name: "Talha Yıldırım",
      job: "Patron",
      img:
        "https://res.cloudinary.com/hakancabbar/image/upload/v1650403347/Project/TALHA_YILDIRIM_nqvrzf.png",
      text:
        "Ben Talha Yıldırım. Şirketin sahibi ve aynı zamanda avukatıyım.",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  let random 
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  


  function showperson(person){

    const item = reviews[currentItem]
   img.src=item.img
   author.textContent=item.name
   job.textContent=item.job;
   info.textContent=item.text


  }

  nextBtn.addEventListener("click",function(){


    if(currentItem>reviews.length-1)
    {

        currentItem=0
        showperson(reviews[currentItem])
    }

    else{

        currentItem++
        showperson(reviews[currentItem])
    }

    




  })

  prevBtn.addEventListener("click",function(){


    if(currentItem===0){

        currentItem=reviews.length-1
        showperson(reviews[currentItem])
    }
    else{
        currentItem--
        showperson(reviews[currentItem])
    }
  })

  randomBtn.addEventListener( "click",function(){
    randomGenerator()
    console.log(currentItem)

    showperson(reviews[currentItem])
  })


  function randomGenerator(){


    currentItem =  Math.floor(Math.random() * reviews.length);
  }