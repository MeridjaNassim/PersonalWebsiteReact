import React from "react";

const Info = () => {
  return (
    <div>
      <h2 className="badge badge-text">Hello i'm</h2>
      <h1 className="name-tag">Meridja Nassim</h1>
      <h4 className="profession-tag">Computer Science Student</h4>

      <Contacts></Contacts>
    </div>
  );
};
const Contacts = () => {
  return (
    <div>
      <ContactInfo
        icon={icons.phone}
        value={other.phone}
        url={null}
      ></ContactInfo>
      <ContactInfo
        icon={icons.email}
        value={other.email}
        url={null}
      ></ContactInfo>
      <ContactInfo
        icon={icons.adress}
        value="Algiers, Algeria"
        url={other.adress}
      ></ContactInfo>
      <SocialMedia />
    </div>
  );
};

const ContactInfo = ({ icon, value, url }) => {
  const val =
    url === null ? (
      value
    ) : (
      <a href={url} rel="noopener noreferrer" target="_blank">
        {value}
      </a>
    );

  return (
    <p>
      <span
        style={{
          margin: "0px"
        }}
      >
        {icon}
      </span>{" "}
      {val}
    </p>
  );
};
export const SocialMedia = () => {
  return (
    <ul>
      <li>
        <ContactInfo
          icon={icons.facebook}
          value="facebook"
          url={links.facebook.url}
        ></ContactInfo>
      </li>
      <li>
        <ContactInfo
          icon={icons.linkedIn}
          value="linkedIn"
          url={links.linkedIn.url}
        ></ContactInfo>
      </li>
      <li>
        <ContactInfo
          icon={icons.github}
          value="github"
          url={links.github.url}
        ></ContactInfo>
      </li>
    </ul>
  );
};

export const icons = {
  email: <i class="fas fa-envelope"></i>,
  phone: <i class="fas fa-phone-alt"></i>,
  adress: <i class="fas fa-map-marker-alt"></i>,
  facebook: <i class="fab fa-facebook"></i>,
  linkedIn: <i class="fab fa-linkedin"></i>,
  github: <i class="fab fa-github"></i>
};
const links = {
  facebook: {
    url: "https://www.facebook.com/nassim.top2",
    text: "Facebook profile"
  },
  linkedIn: {
    url: "https://www.linkedin.com/in/abdellah-meridja-308a16147/",
    text: "LinkedIn profile"
  },
  github: {
    url: "https://github.com/MeridjaNassim",
    text: "Github profile"
  }
};
export const other = {
  email: "ha_meridja@esi.dz",
  adress: "https://goo.gl/maps/dkxDQfJJD71WCP966",
  phone: "+213672439370"
};
export default Info;
