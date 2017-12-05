import { Directive, Input, Output} from '@angular/core';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper} from '@agm/core';
declare var google: any;
@Directive({
  selector: 'agm-map-directions',
  exportAs: 'agm-map-directions'
})
export class GoogleMapDirective {
  @Input() origin;
  @Input() destination;

  @Input() estimatedTime : any;
  @Input() estimatedDistance : any;
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}
  updateDirections(){
    var me = this;
    this.gmapsApi.getNativeMap().then(map => {
    //   if(directionsDisplay != null) {
    //     directionsDisplay.setMap(null);
    //     directionsDisplay = null;
    // }
              var directionsService = new google.maps.DirectionsService;
              var directionsDisplay = new google.maps.DirectionsRenderer;
              directionsDisplay.setMap(map); //this is to set up again
              //directionsDisplay.setMap(map);
              directionsDisplay.setDirections(null);
              directionsDisplay.setPanel(null);


              console.log(directionsService);
              directionsService.route({
                      origin: {lat: this.origin.latitude, lng: this.origin.longitude},
                      destination: {lat: this.destination.latitude, lng: this.destination.longitude},
                      waypoints: [],
                      optimizeWaypoints: true,
                      travelMode: 'DRIVING'
                    }, function(response, status) {
                                if (status === 'OK') {
                                  directionsDisplay.setDirections(response);
                                  console.log(directionsDisplay);
                                  directionsDisplay.setPanel(document.getElementById("directionsPanel"));
                                  //console.log(response);
                                  var point = response.routes[ 0 ].legs[ 0 ];
                                  me.estimatedTime = point.duration.text ;
                                  me.estimatedDistance = point.distance.text;
                                  console.log(me.estimatedTime);
                                  console.log( 'Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')' );
                                  
                                } else {
                                  window.alert('Directions request failed due to ' + status);
                                }
              });

    });
  }



  // ngOnInit() {
  //   //console.log()
  //   this.gmapsApi.getNativeMap().then(map => {
  //   var directionsDisplay = new google.maps.DirectionsRenderer;
  //   var directionsService = new google.maps.DirectionsService;
  //   directionsDisplay.setMap(map);
  //   directionsDisplay.setPanel(document.getElementById('directionsPanel'));

  //   // var control = document.getElementById('floating-panel');
  //   // control.style.display = 'block';
  //   // map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
  //   var me = this;
  //   var onChangeHandler = function() {
  //     me.calculateAndDisplayRoute(directionsService, directionsDisplay);
  //   };
  //   this.origin.addEventListener('change', onChangeHandler);
  //   this.destination.addEventListener('change', onChangeHandler);
  // });
  // }

  // calculateAndDisplayRoute(directionsService, directionsDisplay) {
  //   var me = this;            
  //   directionsService.route({
  //                     origin: {lat: this.origin.latitude, lng: this.origin.longitude},
  //                     destination: {lat: this.destination.latitude, lng: this.destination.longitude},
  //                     waypoints: [],
  //                     optimizeWaypoints: true,
  //                     travelMode: 'DRIVING'
  //                   }, function(response, status) {
  //                               if (status === 'OK') {
  //                                 directionsDisplay.setDirections(response);
  //                                 console.log(directionsDisplay);
  //                                 directionsDisplay.setPanel(document.getElementById("directionsPanel"));
  //                                 //console.log(response);
  //                                 var point = response.routes[ 0 ].legs[ 0 ];
  //                                 me.estimatedTime = point.duration.text ;
  //                                 me.estimatedDistance = point.distance.text;
  //                                 console.log(me.estimatedTime);
  //                                 console.log( 'Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')' );
                                  
  //                               } else {
  //                                 window.alert('Directions request failed due to ' + status);
  //                               }
  //             });

  // }



}
