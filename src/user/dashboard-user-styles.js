import { css } from "lit-element";

export default css `

/* Estilos del menú lateral */
.sidebar {
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #024959;
  padding-top: 20px;
  box-sizing: border-box;
}

.menu-item {
  padding: 10px;
  text-decoration: none;
  color: #fff;
  display: block;
  border-bottom: 1px solid #555;
}

.menu-item:hover {
  background-color: #555;
}

/* Estilos del contenido principal */
.main-content {
  margin-left: 250px;
  padding: 20px;
  box-sizing: border-box;
}

/* Estilos para el div con la tabla */
.table-container {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}

/* Estilos para la tabla */
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

/* Estilos para el modal */
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #fefefe;
    border: 1px solid #888;
    padding: 20px;
    width: 80%;
    max-width: 400px;
    text-align: center;
    max-height: 400px; /* Ajusta la altura máxima según tus necesidades */
    overflow-y: auto;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
  }

  /* Estilos para el formulario en el modal */
  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 8px;
  }

  input {
    padding: 8px;
    margin-bottom: 16px;
  }

  button {
    background-color: #007BFF;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

    `;