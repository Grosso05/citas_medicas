import { LitElement, html, css } from 'lit-element';
import userstyle from "./dashboard-user-styles";

class UserDashboard extends LitElement {
  constructor() {
    super();
    this.activeTab = 'citas';
    this.showModal = false;
    this.tableData = {
      citas: [
        { id: 1, documento: '12345', nombre: 'Juan', fechaCita: '2023-11-10', medico: 'Dr. Martínez', detalles: 'lorem' },
      ],
      medicamentos: [
        { id: 1, nombre: 'Medicamento A', dosis: '10mg', frecuencia: 'Diariamente' },
        { id: 2, nombre: 'Medicamento B', dosis: '20mg', frecuencia: 'Cada 12 horas' },
      ],
    };
    this.formData = {
      documento: '',
      nombre: '',
      fechaCita: '',
      medico: '',
      detalles: '',
    };
  }

  static get properties() {
    return {
      activeTab: { type: String },
      showModal: { type: Boolean },
      tableData: { type: Object },
      formData: { type: Object },
    };
  }

  static get styles() {
    return [userstyle];
  }

  render() {
    return html`
      <div class="sidebar">
        <a href="#" class="menu-item" @click=${() => this.changeTab('citas')}>Agendar Citas</a>
        <a href="#" class="menu-item" @click=${() => this.changeTab('medicamentos')}>Mis Medicamentos</a>
      </div>

      <div class="main-content">
        <h1>Panel de Usuario</h1>
        <div class="table-container">
          ${this.renderContent()}
          <button @click=${this.openModal}>Agregar ${this.activeTab === 'citas' ? 'Cita' : 'Medicamento'}</button>
        </div>
      </div>

      ${this.showModal ? this.renderModal() : ''}
    `;
  }

  changeTab(tab) {
    this.activeTab = tab;
  }

  renderContent() {
    return html`
      <h2>${this.activeTab === 'citas' ? 'Citas' : 'Mis Medicamentos'}</h2>
      <table>
        <tr>
          <th>Id</th>
          ${this.activeTab === 'citas' ?
            html`
              <th>Documento</th>
              <th>Nombre</th>
              <th>Fecha de cita</th>
              <th>Médico</th>
              <th>Detalles de la cita</th>`
            :
            html`
              <th>Nombre</th>
              <th>Dosis</th>
              <th>Frecuencia</th>`
          }
        </tr>
        ${this.tableData[this.activeTab].map(
          data => html`
            <tr>
              <td>${data.id}</td>
              ${this.activeTab === 'citas' ?
                html`
                  <td>${data.documento}</td>
                  <td>${data.nombre}</td>
                  <td>${data.fechaCita}</td>
                  <td>${data.medico}</td>
                  <td>${data.detalles}</td>`
                :
                html`
                  <td>${data.nombre}</td>
                  <td>${data.dosis}</td>
                  <td>${data.frecuencia}</td>`
              }
            </tr>
          `
        )}
      </table>
    `;
  }

  renderModal() {
    const modalTitle = `Agregar Nueva ${this.activeTab === 'citas' ? 'Cita' : 'Medicamento'}`;

    return html`
      <div class="modal">
        <div class="modal-content">
          <span @click=${this.closeModal} class="close">&times;</span>
          <h2>${modalTitle}</h2>
          <form @submit=${this.onSubmit}>
            ${this.activeTab === 'citas' ?
              html`
                <label for="documento">Documento:</label>
                <input type="text" id="documento" .value=${this.formData.documento} @input=${this.updateFormData}>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" .value=${this.formData.nombre} @input=${this.updateFormData}>
                <label for="fechaCita">Fecha de cita:</label>
                <input type="date" id="fechaCita" .value=${this.formData.fechaCita} @input=${this.updateFormData}>
                <label for="medico">Médico:</label>
                <input type="text" id="medico" .value=${this.formData.medico} @input=${this.updateFormData}>
                <label for="detalles">Detalles de la cita:</label>
                <input type="text" id="detalles" .value=${this.formData.detalles} @input=${this.updateFormData}>
              `
              :
              html`
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" .value=${this.formData.nombre} @input=${this.updateFormData}>
                <label for="dosis">Dosis:</label>
                <input type="text" id="dosis" .value=${this.formData.dosis} @input=${this.updateFormData}>
                <label for="frecuencia">Frecuencia:</label>
                <input type="text" id="frecuencia" .value=${this.formData.frecuencia} @input=${this.updateFormData}>
              `
            }
            <button type="submit">Agregar</button>
          </form>
        </div>
      </div>
    `;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  updateFormData(event) {
    const field = event.target.id;
    const value = event.target.value;
    this.formData = {
      ...this.formData,
      [field]: value,
    };
  }

  onSubmit(event) {
    event.preventDefault();

    const newRecord = {
      id: this.tableData[this.activeTab].length + 1,
      ...this.formData,
    };

    this.tableData[this.activeTab] = [...this.tableData[this.activeTab], newRecord];
    this.showModal = false;
  }
}

customElements.define('user-dashboard', UserDashboard);
