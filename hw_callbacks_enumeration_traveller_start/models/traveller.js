const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocationsArray = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return startLocationsArray;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocationsArray = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return endLocationsArray;

};

Traveller.prototype.getModesOfTransport = function () {
  const transportArray = this.journeys.map((journey) => {
    return journey.transport;
  });
  return transportArray;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysArray = this.journeys.filter((journey) => {
  return journey.transport === transport;
});
return journeysArray;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysArray = this.journeys.filter((journey) => {
      return journey.distance >= minDistance;
    });
    return journeysArray;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return total;
};

// Traveller.prototype.getJourneysWithUniqueModes = function () {
//   const transportArray = this.journeys.filter((journey, index) => {
//     // return if this.journeys.indexOf(journey)
//     return this.journeys.includes(journey[index].transport) ;
//   });
//   return transportArray;
//
// };

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
