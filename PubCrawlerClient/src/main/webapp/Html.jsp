<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <title>Pub Crawler</title>
<link rel="stylesheet" href="css/StyleSheet.css">
  </head>
  <body >
  
    <section class="" id="">
      <h1 class="header1">
        <span class="pubCrawlerTitle">Pub Crawler
        </span>
        <br>
      </h1>
      <div class="">
        <div class="">
          <div class="">
            <div class="">
              <h4 class="pubsTitle">Pubs</h4>
            </div>
          </div>
          <div class="">
              <div class="">
                  <h4 class="infoTitle">Info about selected pub</h4>

              </div>
          </div>
          <div class="">
            <div class="">
              <h4 class="">
                <span class="beersTitle">Beers</span>
                <br>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="">
          <div class="">
            <div class="">
            </div>
          </div>
          <div class="">
            <div class="">
            </div>
          </div>
        </div>
        <table class="PubTable">
  <tr>
    <th class= tblPubName>
    Pub Name</th>
    <th class="tblPubAddress">Pub Address</th>
  </tr>
  <tr>
    <td>Alfreds hak</td>
    <td>Maria Andersvägen 23</td>    
  </tr>
  <tr>
    <td>Centro el bärtzo</td>
    <td>Svängvägen 35</td>  
  </tr>
</table>
<table class="BeerTable">
  <tr>
    <th>Beer name</th>
    <th>Type</th>
    <th>Price</th>
  </tr>
  <tr>
    <td class="TblBeerNames"> 
    Norrlands guld 
    </td>
    <td class="tblBeerType">
    Lager 
    </td>
    <td class="tblBeerPrice">
    25 kr
    </td>
  </tr>
  <tr>
    <td>Gränges</td>
    <td>Ljus lager</td>
    <td>3 kr</td>
  </tr>
</table>
      </div>
      <div class="InfoBoxDiv">  
         <TextArea class="InfoBox" rows="10" cols="10" readonly>  Information regarding the pub: 
        </TextArea>
        </div>
        <div>
        <form action="#" method="POST" class="BeerForm">
          <div class="">
            <label for="beerName" class="u-label">Brand:</label>
            <input type="text" placeholder="E.g. Karneöl..." id="beerName" name="name" class="txtBeerName">
          </div>
          <div>
            <label for="beerPrice" class="u-label">Price:</label>
            <input type="text" placeholder="E.g. 25 Kr..." id="beerPrice" name="price" class="txtPrice">
          </div>
          <div class="">
            <label for="beerType" class="u-label">Type: </label>
            <input type="text" placeholder="E.g. Lager..." id="beerType" name="type" class="txtType">
          </div>
          <div>
            <input type="submit" value="Add Beer" id="addBeer" class="btnAddBeer">
          </div>
        </form>
      </div>
      <div class="">
        <form action="#" method="POST" class="PubForm">
          <div class="">
            <label for="pubName">Name:</label>
            <input type="text" placeholder="E.g Barrbaren...." id="pubName" name="name" class="TxtPubName">
          </div>
          <div class="">
            <label for="pubAddress" class="addressLabel">Address:
            </label>
            <input type="text" placeholder="E.g. Examplestreet 1..." id="pubAddress" name="address" class="TxtPubAddress">
          </div>
          <div class="">
            <input type="submit" value="Add pub" id="addPub" class="btnAddPub">
          </div>
        </form>
      </div>
      
      <input type="submit" class="btnUpdateSelPub" id="updatePub" value="Update selected pub">
        <br>
      <input type="submit" class="btnUpdateSelBeer" id="updateBeer" value="Update selected beer">
      <br>
      <input type="submit" class="btnAddBeerToSelPub" id="addBeerToPub" value="Add beer to selected pub">
        <br>
      <input type="submit" class="btnDeleteSelPub" id="deletePub" value="Delete selected pub">
        <br>
      <input type="submit" class="btnDeleteSelBeer" id="deleteBeer" value="Delete selected Beer">
        <br>
    </section>
    <section class="">
    </section>
  </body>
</html>