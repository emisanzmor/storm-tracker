# Storm Tracker / Rastreador de Tormentas

**EN:** Web application to **visualize and download tropical storm and hurricane data** using NHC data through [`Tropycal_API`](https://github.com/ElEmLLi/Tropycal_API).

**ES:** Aplicación web para **visualizar y descargar información de tormentas y huracanes** usando datos de la NHC a través de [`Tropycal_API`](https://github.com/ElEmLLi/Tropycal_API).


## Features | Características

**EN:**
- **Current storms**: List of active cyclones with track maps, forecast data, and downloads (JSON/PNG/ZIP)
- **Historical data**: Date-based search with access to past storms and their forecasts
- **Downloads**: Multiple formats for offline analysis

**ES:**
- **Tormentas actuales**: Lista de ciclones activos con mapas de trayectoria, datos de pronóstico y descargas (JSON/PNG/ZIP)
- **Histórico**: Búsqueda por fecha con acceso a tormentas pasadas y sus pronósticos
- **Descargas**: Múltiples formatos para análisis offline


## Stack

**Frontend:** React + Vite + Tailwind CSS  
**Backend:** FastAPI + Tropycal ([repo](https://github.com/ElEmLLi/Tropycal_API))


## Installation | Instalación

### Backend
```bash
git clone https://github.com/ElEmLLi/Tropycal_API.git
cd Tropycal_API/API-Tropycal
pip install "fastapi[standard]" tropycal cartopy shapely folium pillow
uvicorn tro:app --reload
```

### Frontend
```bash
git clone https://github.com/emisanzmor/storm-tracker.git
cd storm-tracker/frontend
npm install
npm run dev
```

**EN - Default settings:**
- Backend: `http://localhost:8000`
- Frontend: `http://localhost:5173`
- **Note:** If you change the backend port, update the URLs in the `.jsx` files

**ES - Por defecto:**
- Backend: `http://localhost:8000`
- Frontend: `http://localhost:5173`
- **Nota:** Si cambias el puerto del backend, actualiza las URLs en los archivos `.jsx`


## Main Endpoints | Endpoints principales

- `/data` - Active storms | Tormentas activas
- `/data/{storm_name}` - Storm details | Detalles de tormenta
- `/data_date/{date}/{storm_name}` - Historical data | Datos históricos
- `/data_forecast/{date}/{storm_name}/{hour}` - Forecasts | Pronósticos
- `/zipTormenta/{date}/{storm_name}` - Complete download | Descarga completa


## Authors | Autores

- [emisanzmor](https://github.com/emisanzmor) - Frontend
- [bgoni04](https://github.com/bgoni04) - Frontend
- [ElEmLLi](https://github.com/ElEmLLi) - Backend


## Screenshots

<img width="800" alt="Screenshot 2025-12-01 at 3 02 52" src="https://github.com/user-attachments/assets/74581707-5840-4da2-979c-71bbf53387c7" />
<img width="800" alt="Screenshot 2025-12-01 at 3 02 57" src="https://github.com/user-attachments/assets/93983686-4d50-4749-bf23-f7739ad84f5a" />
<img width="800" alt="Screenshot 2025-11-25 at 1 07 31" src="https://github.com/user-attachments/assets/f4ee6f74-baa2-44e5-af9b-ae5970e772dc" />
<img width="800" alt="Screenshot 2025-12-01 at 3 28 11" src="https://github.com/user-attachments/assets/ea02fef8-5b83-4c47-8f17-bbbd04bf92d8" />
<img width="800" alt="Screenshot 2025-12-01 at 3 24 06" src="https://github.com/user-attachments/assets/1e84c685-8817-4f48-8ef8-b0aabb0d8841" />
<img width="800" alt="Screenshot 2025-11-25 at 1 07 36" src="https://github.com/user-attachments/assets/4328cbb3-3338-4f36-b29b-6d523d9233d2" />