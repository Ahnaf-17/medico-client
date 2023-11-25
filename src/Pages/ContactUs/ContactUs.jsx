/* eslint-disable react/no-unescaped-entities */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactUs = () => {
  const position = [23.8193753485174, 90.40932855185206]; // kurmitola hospital location

  return (
    <>
      <div className="hero bg-base-100 lg:mt-0 ">
        <div className="hero-content flex-col lg:flex-row-reverse mt-20 min-h-screen">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact us</h1>
            <p className="py-6">
              If you have any inquiries, suggestions, or if you're interested in collaborating with us for a medical camp event, please don't hesitate to reach out. Our team is dedicated to fostering a healthier community. Whether it's about volunteering opportunities, sponsorship, or general inquiries regarding our upcoming events, we're here to assist you. Contact us via the provided form or directly through email or phone. We appreciate your interest and support in promoting better health and wellness for all.
            </p>

            <div className="map-container mb-4" style={{ height: "250px", width: "100%" }}>
            <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
              />
              <Marker position={position}>
                <Popup>
                  MEDICO head office.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body bg-cyan-700 rounded-xl">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Feedback</span>
                </label>
                <textarea name="" id="" cols="10" rows="5" className="rounded-md"></textarea>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Submit" className="btn bg-cyan-900 text-white border-none" />
              </div>
            </form>
          </div>
          
        </div>
        
      </div>
      {/* Map Section */}
      {/* <SectionHeading heading='see us'></SectionHeading> */}

    </>
  );
};

export default ContactUs;
