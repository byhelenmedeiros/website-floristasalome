export const saveImage = async (imageFile) => {
    try {
      // Lógica para enviar a imagem para o servidor e obter a URL da imagem salva
      const imageUrl = 'URL_DA_IMAGEM_SALVA';
  
      return imageUrl;
    } catch (error) {
      throw new Error('Erro ao fazer upload da imagem: ' + error.message);
    }
  };
  