/* global google */
import OrderStore from '../../../stores/order-store';

export const insertGoogleMapsScript = () =>
  new Promise((resolve, reject) => {
    if (document.getElementById('autocomplete-script')) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.id = 'autocomplete-script';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyALcryb0lm_s__qtyYX16o1IjdeDrt2NXc&libraries=places';
    script.async = true;
    script.addEventListener('load', resolve);
    script.addEventListener('error', reject);
    document.body.appendChild(script);
  });

const attachAutoCompleteEl = () => {
  const input = document.getElementById('location-input');
  const autocomplete = new google.maps.places.Autocomplete(input, {
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng({ lat: 27.9999932635, lng: -81.9420167728 }), // southwest corner of bound
      new google.maps.LatLng({ lat: 28.974260002, lng: -80.7213136726 }), // northeast corner of bound
    ),
    fields: ['name', 'formatted_address', 'geometry'],
    strictBounds: true,
  });
  autocomplete.addListener('place_changed', function () {
    OrderStore._errorFromGoogle = false;
    OrderStore.deliveryLocation = autocomplete.getPlace();
  });
};

export const initAutocomplete = async () => {
  await insertGoogleMapsScript();
  attachAutoCompleteEl();
};

export const cleanupMapsElements = () => {
  if (document.querySelector('.pac-container')) {
    document.querySelector('.pac-container').remove();
  }
};
