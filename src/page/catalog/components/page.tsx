import React from 'react'
import Filter from './Filter'
import CatalogTemplate from '../../../components/Templates/Catalog.template'

const CatalogPage: React.FC = () => {
  return (
    <>
      <Filter />
      <section>
        <CatalogTemplate />
      </section>
    </>
  )
}

export default CatalogPage