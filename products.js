// Product data for dynamic rendering
const productsData = {
    featured: [
        {
            id: 1,
            name: "Agenda Personalizada",
            description: "Agenda con diseño único y personalizable",
            price: "$25.99",
            image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&h=400&fit=crop"
        },
        {
            id: 2,
            name: "Set de Lápices Artísticos",
            description: "Colección de lápices de colores premium",
            price: "$18.50",
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop"
        },
        {
            id: 3,
            name: "Organizador de Escritorio",
            description: "Mantén tu espacio organizado con estilo",
            price: "$32.00",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop"
        },
        {
            id: 4,
            name: "Stickers Decorativos",
            description: "Colección de stickers únicos y divertidos",
            price: "$12.99",
            image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop"
        },
        {
            id: 5,
            name: "Cuaderno Artesanal",
            description: "Cuaderno hecho a mano con papel reciclado",
            price: "$22.75",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop"
        },
        {
            id: 6,
            name: "Marcadores Especiales",
            description: "Marcadores de alta calidad para artistas",
            price: "$28.90",
            image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop"
        }
    ],
    boxArte: [
        {
            id: 7,
            name: "Kit de Pintura Completo",
            description: "Set completo con pinceles, acuarelas y lienzo",
            price: "$45.99",
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop"
        },
        {
            id: 8,
            name: "Kit de Manualidades Creativas",
            description: "Materiales para crear proyectos únicos",
            price: "$35.50",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
        }
    ],
    boxEscolar: [
        {
            id: 9,
            name: "Kit Escolar Completo",
            description: "Cuadernos, lápices, reglas y más",
            price: "$29.99",
            image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&h=400&fit=crop"
        },
        {
            id: 10,
            name: "Organizador Escolar",
            description: "Mantén tus útiles organizados",
            price: "$22.75",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop"
        }
    ],
    boxAmigo: [
        {
            id: 11,
            name: "Kit de Amistad",
            description: "Detalles únicos para tu mejor amiga/o",
            price: "$38.90",
            image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop"
        },
        {
            id: 12,
            name: "Box Personalizado",
            description: "Crea un regalo único y especial",
            price: "$42.00",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop"
        }
    ],
    boxSorpresuki: [
        {
            id: 13,
            name: "Caja Sorpresa Premium",
            description: "Una selección curada de productos especiales",
            price: "$55.99",
            image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop"
        },
        {
            id: 14,
            name: "Mini Sorpresuki",
            description: "Pequeñas sorpresas con gran impacto",
            price: "$25.75",
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop"
        }
    ]
};

const categoryInfo = {
    boxArte: {
        title: "BOX ARTE Y CREACIÓN",
        description: "Despierta tu creatividad con nuestros kits de arte únicos"
    },
    boxEscolar: {
        title: "BOX ESCOLAR",
        description: "Todo lo que necesitas para el colegio en un solo lugar"
    },
    boxAmigo: {
        title: "BOX AMIGA/O",
        description: "Regalos especiales para demostrar tu cariño"
    },
    boxSorpresuki: {
        title: "BOX SORPRESUKI",
        description: "Sorpresas únicas que alegrarán tu día"
    }
};