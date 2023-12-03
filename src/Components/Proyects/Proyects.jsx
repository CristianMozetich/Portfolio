import React from 'react'
import './Proyects.css'
import { proyectos } from '../../../asyncmock'
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";


const Proyects = () => {
  return (
    <>
      {
      proyectos.map((proyecto) => (
          <Card id='tarjeta_proyectos' key={proyecto.id}>
            <CardHeader>
              <a href={proyecto.web} target='_blank'><h2 className='title'>{proyecto.name}</h2></a>
            </CardHeader>
            <Divider/>
            <CardBody>
              <a href={proyecto.web} target='_blank'><p className='desc'>{proyecto.desc}</p></a>
            </CardBody>
            <Divider/>
            <CardFooter>
              <p className='tech'>{proyecto.tech}</p>

            </CardFooter>
            <Divider/>
            <CardFooter>
              <p className='year'>{proyecto.year}</p>
            </CardFooter>
          </Card>
        ))}
    </>
  )
}

export default Proyects
