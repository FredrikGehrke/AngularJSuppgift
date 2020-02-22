var app = angular.module("demoApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/Hem.html",
        controller: "hemController" ,
        activetab: "Hem"
    })
    .when("/varabilar", {
        templateUrl: "views/varabilar.html",
        controller: "varabilarController",
        activetab: "varabilar"
    })
    .when("/begagnadebilar", {
        templateUrl: "views/bgBilar.html",
        controller: "bgBilarController",
        activetab: "begagnadebilar"
    })
    .when("/kontakt", {
        templateUrl: "views/kontakt.html",
        controller: "kontaktController",
        activetab: "kontakt"
    })
    .when("/omOss", {
        templateUrl: "views/omOss.html",
        controller: "omOssController",
        activetab: "omOss"
    })
})


app.controller("hemController", function($scope) {
    $scope.hem = [
        { title: "Köp din drömbil idag",  text: "!", mRubrik: "Vår senast tillkomna bil!"},
    ]
})

.controller("varabilarController", function($scope) {
    $scope.varabilar = [
        { LamboTitle: "Lamborghini Aventador", MercedesTitle: "Mercedes-AMG GT", FerrariTitle: "Ferrari F40", MclarenTitle: "McLaren 570 GT"},
    ]
})

.controller("bgBilarController", function($scope) {
    $scope.bgBilar = [
        { title: "Begagnade Bilar", paragraph: "Vi måste få in lite skit bilar först!"},
    ]
})

.controller("kontaktController", function($scope) {
    $scope.kontakt = [
        { adress: "Pilgatan 2, Västerås"},
    ]
})

.controller("omOssController", function($scope) {
    $scope.omOss = [
        { title: "Våran Historia", paragraph: "Vi kommer såklart att fortsätta att lura på kunderna bilar! "},
    ]
})


// DIRECTIVES = Partial Views
app.directive("appheader", function() {
    return {
        template: '<section class="first-section"><header> <nav class="stroke navbar navbar-expand-lg navbar-light bg-light"><div id="nav-container" class="container"><a class="navbar-brand logo" href="#"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span> </button><div class="collapse navbar-collapse navbar-center" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" id="hemNav" href="#/!">Hem <span class="sr-only">(current)</span></a></li> <li class="nav-item"><a class="nav-link" href="#!varabilar">Våra Bilar</a></li><li class="nav-item"><a class="nav-link" href="#!begagnadebilar">Begagnade Bilar</a> </li> <li class="nav-item"><a class="nav-link" href="#!kontakt">Kontakt</a> </li> <li class="nav-item"><a class="nav-link" href="#!omOss">Om Oss</a> </li> </li></ul></div><i id="sokICON" class="fas fa-search sok-icon"></div></nav></header></section>'
    }
})
app.directive("appfooter", function() {
    return {
        template: '<footer id="footer"> <div class="own-jumbotron7"> <div class="row-7 justify-content-center"> <div class="col"> <div class="footer-rubrik"> <img class="navbar-brand-footer" src="/lektion-2/images/exoticText.png" alt="ExoticCars text" width="240" height="80"> </div><div id="logo-text"> <p>Öppetttider:</p><p>Mån-Fre: 10-18</p></div></div><div class="col footer-p"> <p>Leverans</p><p>FAQ</p><p>Returer</p></div><div class="col footer-p"> <p>Pilgatan 2, Västerås</p><p>070 345 67 03</p><p>exoticcars@ec.se</p></div><div class="col footer-p"> <p>Om Oss</p><p>GDPR</p><p>Kontakt</p></div><div class="col footer-p"> <p><i class="fab fa-facebook-f icons FB"></i>Facebook</p><p><i class="fab fa-twitter icons TW"></i>Twitter</p><p><i class="fab fa-instagram icons"></i>Instagram</p></div></div></div><div id="copyright">&copy; ExoticCars 2020</div></footer>'
    }
})



