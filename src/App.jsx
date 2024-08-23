import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === "" || validation === "") {
      alert("Veuillez remplir les deux champs de mot de passe");
      return;
    }
    if (password === validation) {
      setIsSubmitted(true);
    } else {
      alert("Vos deux mots de passe ne sont pas identiques");
    }
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      {isSubmitted ? (
        <StepTwo
          name={name}
          email={email}
          password={password}
          handleEdit={handleEdit}
        />
      ) : (
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          validation={validation}
          setValidation={setValidation}
          handleSubmit={handleSubmit}
        />
      )}
      <Footer />
    </>
  );
};

export default App;
