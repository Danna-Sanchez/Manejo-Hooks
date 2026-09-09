# Calculadora de Áreas de Figuras Geométricas

Proyecto web de página única (single page) desarrollado en **React**, que permite calcular el área de tres figuras geométricas: **triángulo**, **rectángulo** y **cuadrado**.

## Descripción

El usuario selecciona una figura en un menú desplegable e ingresa sus medidas (Base/Altura, o Lado en el caso del cuadrado). Al presionar **Calcular**, la aplicación obtiene el área usando **React Hooks** (`useState`) y la muestra en pantalla. También cuenta con un botón **Limpiar** para reiniciar el formulario.

- **Triángulo:** Área = (base × altura) / 2
- **Rectángulo:** Área = base × altura
- **Cuadrado:** Área = lado × lado

Si la figura seleccionada es "Cuadrado", el formulario oculta automáticamente el segundo campo (Altura), ya que el cuadrado solo necesita un valor.

## Funcionalidades

- Cálculo dinámico según la figura seleccionada (`switch` sobre el estado `figura`).
- Validación de campos: no permite calcular si los valores están vacíos o no son numéricos.
- Botón **Limpiar** que reinicia todos los campos y el resultado.
- Diseño responsivo con tarjeta centrada, degradado de fondo y estilos personalizados en `Figuras.css`.

## Tecnologías utilizadas

- React 18
- Create React App (`react-scripts`)
- Bootstrap 5 (CDN, para el select y los inputs)
- CSS personalizado (Flexbox, degradados, animaciones)
- React Hooks (`useState`)

## Instalación y ejecución

```bash
npm start
```

La aplicación se abrirá automáticamente en:

```
http://localhost:3000
```

## Autor

Danna Sánchez
