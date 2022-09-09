import React from 'react'
import styled from 'styled-components'

function Table() {
  return (
    <TableCOntainer>
        <p>Run your money bitch</p>

    </TableCOntainer>
  )
}

const TableCOntainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  height: 100vh;
  border-radius: 1rem;
`

export default Table