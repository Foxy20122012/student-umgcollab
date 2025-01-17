import {
  Cursos
} from '../../../../models/interface/Cursos'

class CursosService {
   // getAxios = (props) => {
    //     const url = this.urlBase + endpoint;
    //     const timeout = this.timeout;
    //     return (
    //         {
    //             ...props,
    //             url,
    //             timeout
    //         }
    //     )
    // }

    // request({
    //     method: 'get',
    //     endpoint: 'endpont',
    //     responseType: 'blob'
    // })
  getCursos = async (): Promise<Cursos> => {
    try {
      const response = await fetch('http://localhost:3000/api/Cursos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const res = await response.json();
        return Promise.reject(res.message);
      }

      return await response.json();
    } catch (err: any) {
      return Promise.reject('ERROR: ' + JSON.stringify(err));
    }
  };

  //Metodo post para crear Cursos

  createCurso = async (cursoData: Partial<Cursos>): Promise<void> => {
    try {
      const response = await fetch('http://localhost:3000/api/Cursos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cursoData),
      });

      if (!response.ok) {
        const res = await response.json();
        return Promise.reject(res.message);
      }
    } catch (err: any) {
      return Promise.reject('ERROR: ' + JSON.stringify(err));
    }
  };

  // Método para actualizar un curso
  updateCurso = async (id: number, cursoData: Partial<Cursos>): Promise<void> => {
    const { nombre, descripcion } = cursoData; // Solo nombre y descripción
    try {
      const response = await fetch(`http://localhost:3000/api/Cursos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, descripcion }), // Solo nombre y descripción
      });

      if (!response.ok) {
        const res = await response.json();
        return Promise.reject(res.message);
      }

      return await response.json();
    } catch (err: any) {
      return Promise.reject('ERROR: ' + JSON.stringify(err));
    }
  };


  // Método para eliminar un curso
  deleteCurso = async (id: number): Promise<void
  > => {
    try {
      const response = await fetch(`http://localhost:3000/api/Cursos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const res = await response.json();
        return Promise.reject(res.message);
      }
    } catch (err: any) {
      return Promise.reject('ERROR: ' + JSON.stringify(err));
    }
  };

  // Método para obtener el archivo Excel de un curso por ID
  getCursoExcelId = async (id: number): Promise<Blob> => {
    try {
      const response = await fetch(`http://localhost:3000/api/Cursos/${id}/excel`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
      });

      if (!response.ok) {
        const res = await response.json();
        return Promise.reject(res.message);
      }

      return await response.blob();
    } catch (err: any) {
      return Promise.reject('ERROR: ' + JSON.stringify(err));
    }
  };

  //Metodo para Obtener el archivo excel generar de todos los cursos


  getCursoExcel = async (): Promise<Blob> => {
    try {
      const response = await fetch('http://localhost:3000/api/cursosExcel', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
      });

      if (!response.ok) {
        const res = await response.json();
        return Promise.reject(res.message);
      }

      return await response.blob();
    } catch (err: any) {
      return Promise.reject('ERROR: ' + JSON.stringify(err));
    }
  };

  // Método para obtener el archivo PDF de todos los cursos
  getCursoPdf = async (): Promise<Blob> => {
    try {
      const response = await fetch('http://localhost:3000/api/cursosPdf', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/pdf',
        },
      });

      if (!response.ok) {
        const res = await response.json();
        return Promise.reject(res.message);
      }

      return await response.blob();
    } catch (err: any) {
      return Promise.reject('ERROR: ' + JSON.stringify(err));
    }
  };

  //Endpoint para obtener el pdf de cada curso por id

  // Método para obtener el archivo PDF de un curso por ID
getCursoPdfById = async (id: number): Promise<Blob> => {
  try {
    const response = await fetch(`http://localhost:3000/api/cursos/${id}/pdf`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    });

    if (!response.ok) {
      const res = await response.json();
      return Promise.reject(res.message);
    }

    return await response.blob();
  } catch (err: any) {
    return Promise.reject('ERROR: ' + JSON.stringify(err));
  }
};


}

export default CursosService;
