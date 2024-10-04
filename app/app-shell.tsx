"use client";
import React from 'react';
import { FileText, Database, BarChart2, GitBranch, PieChart, User, Table, ChevronDown } from 'lucide-react';
import Button from "./components/ui/button";
import Input from "./components/ui/input";
import ScrollArea from "./components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./components/ui/collapsible";

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  color: string;
  subItems: string[];
}

export default function Component() {
  const [activeSection, setActiveSection] = React.useState<string>('Archivo');
  const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      name: 'Archivo',
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      color: 'blue',
      subItems: [
        'Importar conjuntos de datos',
        'Visualizar el conjunto de datos',
        'Configurar preferencias de la aplicación',
        'Guardar archivos'
      ]
    },
    {
      name: 'Procesamiento de datos',
      icon: <Database className="h-5 w-5 text-green-500" />,
      color: 'green',
      subItems: [
        'Limpieza de datos',
        'Agregar columnas del conjunto de datos',
        'Eliminar columnas específicas',
        'Modificar columnas',
        'Modificar datos'
      ]
    },
    {
      name: 'Estadística',
      icon: <BarChart2 className="h-5 w-5 text-purple-500" />,
      color: 'purple',
      subItems: ['Media', 'Mediana', 'Moda', 'Desviación Estándar']
    },
    {
      name: 'Cruce de variables',
      icon: <GitBranch className="h-5 w-5 text-orange-500" />,
      color: 'orange',
      subItems: [
        'Consulta de cruce de Variable a variable',
        'Consulta de rango de variables',
        'Consulta de un conjunto de datos a una variable',
        'Consulta de un dato a una variable'
      ]
    },
    {
      name: 'Mostrar Datos',
      icon: <Table className="h-5 w-5 text-pink-500" />,
      color: 'pink',
      subItems: [
        'Ver Tabla',
        'Buscar',
        'Paginar'
      ]
    },
    {
      name: 'Gráficos',
      icon: <PieChart className="h-5 w-5 text-yellow-500" />,
      color: 'yellow',
      subItems: [
        'Generar gráficos por columna',
        'Personalizar gráficos'
      ]
    },
    {
      name: 'Usuario',
      icon: <User className="h-5 w-5 text-teal-500" />,
      color: 'teal',
      subItems: [
        'Perfil',
        'Configuración',
        'Preferencias'
      ]
    }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md overflow-y-auto">
        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold text-blue-600">EstadísticaApp</h1>
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <Collapsible
              key={item.name}
              open={openSubMenu === item.name}
              onOpenChange={() => setOpenSubMenu(openSubMenu === item.name ? null : item.name)}
            >
              <CollapsibleTrigger onClick={() => setOpenSubMenu(openSubMenu === item.name ? null : item.name)}>
                <Button
                  variant={activeSection === item.name ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-2 px-4 py-2 text-left ${
                    activeSection === item.name ? `bg-${item.color}-100 text-${item.color}-700` : ''
                  }`}
                >
                  {item.icon}
                  {item.name}
                  <ChevronDown className="ml-auto h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent open={openSubMenu === item.name}>
                {item.subItems.map((subItem) => (
                  <Button
                    key={subItem}
                    variant="ghost"
                    className="w-full justify-start py-1 text-sm"
                    onClick={() => setActiveSection(`${item.name} - ${subItem}`)}
                  >
                    {subItem}
                  </Button>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">{activeSection}</h2>
          <div className="flex items-center gap-4">
            <Input type="search" placeholder="Buscar..." className="w-64" />
            <Button variant="outline" size="icon">
              <FileText className="h-5 w-5 text-blue-500" />
            </Button>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <ScrollArea className="h-full">
            {/* Placeholder content */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-4">Contenido de {activeSection}</h3>
              <p className="text-gray-600">
                Aquí se mostrará el contenido específico de la sección {activeSection}.
                Incluye funcionalidades como arrastrar y soltar datos, opciones de
                configuración, y visualizaciones según la sección seleccionada.
              </p>
              {/* Tip or tutorial */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded p-4">
                <h4 className="text-sm font-medium text-blue-800 mb-2">Tip rápido</h4>
                <p className="text-sm text-blue-700">
                  Para comenzar con {activeSection}, prueba a...
                </p>
              </div>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}

