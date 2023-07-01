import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Admin.css';
import { saveImage } from './api';
//import { saveProduct } from './api';

const Formulario = () => {
  const formik = useFormik({
    initialValues: {
      nome: '',
      descricao: '',
      preco: '',
      imagem: null,
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .required('O nome do produto é obrigatório')
        .matches(/^[a-zA-Z\s]+$/, 'O nome do produto deve conter apenas letras e espaços'),
      descricao: Yup.string()
        .required('A Descricão do produto é obrigatoria')
        .max(500, 'A descrição do produto deve conter no máximo 500 caracteres'),
      preco: Yup.number()
        .required('O preço do produto é obrigatório')
        .positive('O preço do produto deve ser um valor positivo')
        .integer('O preço do produto deve ser um valor inteiro'),
      imagem: Yup.mixed()
        .required('A imagem do produto é obrigatória'),
    }),
    onSubmit: (values) => {
      // Aqui você pode realizar a lógica para enviar os dados para a base de dados.

      // Resetar os campos
      formik.resetForm();
    },
  });

  const handleImagemChange = async (event) => {
    event.preventDefault();

    const imageFile = event.target.files[0];

    try {
      const imageUrl = await saveImage(imageFile);
      formik.setFieldValue('imagem', imageUrl);
      console.log("enviou imagem");
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="container">
        <Form className="formulario" onSubmit={formik.handleSubmit}>
          <h1>Cadastre o produto escolhido</h1>
          <Form.Group controlId="nomeProduto">
            <Form.Label>Nome do Produto:</Form.Label>
            <Form.Control
              type="text"
              name="nome"
              value={formik.values.nome}
              onChange={formik.handleChange}
              isInvalid={formik.touched.nome && formik.errors.nome}
            />
            {formik.touched.nome && formik.errors.nome && (
              <Form.Control.Feedback type="invalid">{formik.errors.nome}</Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="descricaoProduto">
            <Form.Label>Descrição do Produto:</Form.Label>
            <Form.Control
              as="textarea"
              name="descricao"
              value={formik.values.descricao}
              onChange={formik.handleChange}
              isInvalid={formik.touched.descricao && formik.errors.descricao}
            />
            {formik.touched.descricao && formik.errors.descricao && (
              <Form.Control.Feedback type="invalid">{formik.errors.descricao}</Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="precoProduto">
            <Form.Label>Preço:</Form.Label>
            <Form.Control
              type="number"
              name="preco"
              value={formik.values.preco}
              onChange={formik.handleChange}
              isInvalid={formik.touched.preco && formik.errors.preco}
            />
            {formik.touched.preco && formik.errors.preco && (
              <Form.Control.Feedback type="invalid">{formik.errors.preco}</Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="imagemProduto">
            <Form.Label>Imagem:</Form.Label>
            <Form.Control
              type="file"
              name="imagem"
              accept="image/*"
              onChange={handleImagemChange}
              isInvalid={formik.touched.imagem && formik.errors.imagem}
            />
            {formik.touched.imagem && formik.errors.imagem && (
              <Form.Control.Feedback type="invalid">{formik.errors.imagem}</Form.Control.Feedback>
            )}
          </Form.Group>
          <div className="btn-container">
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Formulario;
