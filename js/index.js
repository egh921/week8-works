$(document).ready(function () {
   $(".glass").on("click", function () {
      $(".knife1").animate({top: "11%"}, 200);
      $(".knife4").animate({left: "33%"}, 200);
      $(".knife7").animate({top: "45%"}, 200);
      $(".knife10").animate({right: "37%"}, 200);

      $(".knife2").animate({top: "15%"},  200);
      $(".knife3").animate({left: "34.5%"}, 200);
      $(".knife5").animate({left: "35%"}, 200);
      $(".knife6").animate({top: "44%"}, 200);
      $(".knife8").animate({top: "44%"}, 200);
      $(".knife9").animate({right: "41%"}, 200);
      $(".knife11").animate({right: "41%"}, 200);
      $(".knife12").animate({top: "15.5%"}, 200);

      $(".text3").animate({left: "2%"}, 200);
   })

   $(".glass").mouseout(function (e) {
      $(".knife1").animate({top: "-50%"}, 200);
      $(".knife4").animate({left: "-50%"}, 200);
      $(".knife7").animate({top: "150%"}, 200);
      $(".knife10").animate({right: "-60%"}, 200);

      $(".knife2").animate({top: "12%"}, 20);
      $(".knife3").animate({left: "33%"}, 20);
      $(".knife5").animate({left: "34%"}, 20);
      $(".knife6").animate({top: "46%"}, 20);
      $(".knife8").animate({top: "46%"}, 20);
      $(".knife9").animate({right: "39%"}, 20);
      $(".knife11").animate({right: "39%"}, 20);
      $(".knife12").animate({top: "13%"}, 20);

      $(".text3").animate({left: "-50%"}, 200);
   })
})