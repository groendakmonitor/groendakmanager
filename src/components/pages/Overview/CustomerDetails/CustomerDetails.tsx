import React, { useEffect, useRef, useState } from "react";
import { CustomerData } from "models/customer";
import ThemeSelector from "./ThemeSelector";
import { Theme } from "static/theme";

interface Props {
  data: CustomerData;

  onUpdateCustomer: (data: CustomerData) => void;
  onDeleteCustomer: () => void;
}

const CustomerDetails = (props: Props) => {
  const { data, onUpdateCustomer, onDeleteCustomer } = props;
  const [current, setCurrent] = useState(data);

  useEffect(() => {
    setCurrent(data)
  }, [data]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrent({
      ...current,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSaveClick = () => {
    onUpdateCustomer(current);
  }
  const handleDeleteClick = () => {
    onDeleteCustomer();
  }

  const ref = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let map: google.maps.Map;
    const center: google.maps.LatLngLiteral = ! data.location ? {lat: 51.99954706308361, lng: 4.363697780523488} : toLatLong(data.location)

    map = new google.maps.Map(ref.current!, {
      center,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      zoom: 11
    });

    const marker = new google.maps.Marker({
      map,
      // icon,
      title: "LOCATION",
      position: map.getCenter(),
    })

    map.addListener("center_changed", () => {
      setCurrent(c => ({
        ...c,
        location: `${map.getCenter().lat()},${map.getCenter().lng()}`
      }))
   
  
      marker.setPosition(map.getCenter())
    });
      

    // Create the search box and link it to the UI element.
  const input = searchRef.current!;
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
  });

  // [START maps_places_searchbox_getplaces]
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }

  
    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

  }, [data.location]);

  const handleThemeChange = (theme: Theme) => {
    setCurrent({
      ...current,
      theme
    })
  }

  return (
    <div className="card">
      <div className="card-body">
        <fieldset>
           <legend className="text-uppercase font-size-sm font-weight-bold d-flex justify-content-between">
            <span className="d-block">Customer details</span>
            <span className="d-block badge badge-info">ID: {data.id}</span>
          </legend>
          <div className="form-group row">
            <label className="col-form-label col-lg-3">Name</label>
            <div className="col-lg-9">
              <div className="input-group">
                <input type="text" className="form-control" value={current.name} onChange={handleChange} name="name" placeholder="name" />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-lg-3">Password</label>
            <div className="col-lg-9">
              <div className="input-group">
                <input type="text" className="form-control" value={current.password} onChange={handleChange} name="password" placeholder="password" />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-lg-3">Roof size</label>
            <div className="col-lg-9">
              <div className="input-group">
                <input type="number" min="0" className="form-control" value={current.roof_size} onChange={handleChange} name="roof_size" placeholder="roof size" />
                <span className="input-group-append">
                  <span className="input-group-text">m2</span>
                </span>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-lg-3">Roof thickness</label>
            <div className="col-lg-9">
              <div className="input-group">
                <input type="number" min="0" className="form-control" value={current.roof_thickness} onChange={handleChange} name="roof_thickness" placeholder="roof thickness" />
                <span className="input-group-append">
                  <span className="input-group-text">cm</span>
                </span>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-lg-3">Location</label>
            <div className="col-lg-9">
              <div className="input-group">
                <input type="text" className="form-control" ref={searchRef}/>
                <div ref={ref} style={{ width: '100%', height: 200 }} />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-lg-3">Theme</label>
            <div className="col-lg-9">
              <div className="input-group">
                <ThemeSelector theme={current.theme} onChange={handleThemeChange} />
              </div>
            </div>
          </div>
        </fieldset> 
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button type="submit" className="btn btn-light" onClick={handleDeleteClick}>Delete</button>
        <div>
          <button type="button" className="ml-2 btn btn-primary" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomerDetails;

const toLatLong = (input: string): google.maps.LatLngLiteral => {
  const [lat, lng] = input.split(",").map(i => Number(i));
  return { lat, lng }
}