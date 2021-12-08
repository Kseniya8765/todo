import "../Title/title.scss";
import logo from './img/logo.jpg';

export const Title = () => {
  return (
    <div className="title">
    <menu className="menu">
      <div className="logo">
        <img src={logo} alt="img" />
        <h1>Tasks</h1>
      </div>
      <div className="dropdown">
        <select className="select">
          <option >Leanne Graham </option>
          <option>Leanne</option>
        </select>
        <i className="material-icons">keyboard_arrow_down</i>
      </div>
    </menu>
  </div>
  );
};
