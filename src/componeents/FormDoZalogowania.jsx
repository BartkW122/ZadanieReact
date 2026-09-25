import { Children } from "react";

export default function Form() {
  function walidacja(e) {
    e.preventDefault();

    const formElements = e.target.querySelectorAll("input");
    let allFilled = true;

    for (const input of formElements) {
      if (input.value.trim() === "") {
        alert("Wypełnij wszystkie pola!");
        allFilled = false;
        break;
      }
    }

    if (allFilled) {
      for (const input of formElements) {
        input.value = "";
      }
      console.log("Formularz został wyczyszczony.");
    }
  }

  return (
    <form onSubmit={walidacja}>
      <label>
        Imie:
        <input name="name" type="text" placeholder="podaj imie..." />
      </label>

      <label>
        nazwisko:
        <input name="surname" type="text" placeholder="podaj naziwsko..." />
      </label>

      <label>
        email:
        <input name="email" type="email" placeholder="podaj email..." />
      </label>

      <button type="submit">Zaloguj się</button>
    </form>
  );
}
