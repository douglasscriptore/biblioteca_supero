import React, { useState, useEffect, useCallback } from 'react'
import { format } from 'date-fns'

import { useDispatch, useSelector } from 'react-redux'
import { show } from '../../store/modules/dialog/actions'

import api from '../../services/api'

import { toast } from 'react-toastify'
import Header from '../../components/Header'
import Filter from '../../components/Filter'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Tooltip from '../../components/Tooltip'
import Pagination from '../../components/Pagination'
import Loader from '../../components/Loader'

import { FiEye, FiTrash2 } from 'react-icons/fi'

import { Container, Table, Align } from './styles'
import { Scroll } from '../../styles/global'

function Biblioteca() {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  const [selected, setSelected] = useState(null)
  const [totalCount, setTotalCount] = useState(0)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(0)
  const [filter, setFilter] = useState({
    Busca: '',
    SkipCount: 0,
    MaxResultCount: 10,
    Sorting: 'titulo',
  })

  /**
   * REDUX
   */
  const dispatch = useDispatch()
  const { callback: callbackDialog } = useSelector((state) => state.dialog)
  /**
   * FUNCTIONS
   */

  const handleFilterSearch = (data) => {
    setFilter({ ...filter, Busca: data.search, SkipCount: 0 })
    setPage(1)
  }

  const handleFilterData = (AnoInicial, AnoFinal) => {
    setFilter({
      ...filter,
      AnoInicial: AnoInicial ? format(new Date(AnoInicial), 'yyyy') : null,
      AnoFinal: AnoFinal ? format(new Date(AnoFinal), 'yyyy') : null,
    })
    setPage(1)
  }

  const handleShowBook = async (id) => {
    try {
      const response = await api.get(`/Livros/${id}`)
      const book = response.data
      const dataHtml = []
      Object.entries(book).forEach(([key, value]) => {
        if (key !== 'id') {
          dataHtml.push(`<li><b>${key}</b> <strong>${value}</strong></li>`)
        }
      })

      dispatch(
        show({
          type: 'info',
          contentHTML: `<div><ul>${dataHtml.join('')}</ul></div>`,
        })
      )
    } catch (err) {
      toast.error(err.message || 'Ops! Erro inesperado')
    }
  }

  function handleDelete(item) {
    setSelected(item)
    const optionBase = {
      type: 'question',
      text: `Remover o livro ${item.titulo} ?`,
      confirmButtonText: 'CONFIRMAR',
      callback: {
        url: `/Livros/${item.id}`,
        method: api.delete,
      },
      haveCallback: true,
      successMessage: 'Livro apagado!',
      cancelButtonText: 'NÃO',
      showCancelButton: false,
      showConfirmButton: true,
      showCloseButton: true,
    }
    dispatch(show(optionBase))
  }

  const handleCalcPaginate = (newPage) => {
    setFilter({
      ...filter,
      SkipCount: newPage === 1 ? 0 : filter.MaxResultCount * (newPage - 1),
    })
    setPage(newPage)
  }

  /**
   * USE CALLBACK
   */

  const handleFindList = useCallback(async () => {
    setLoading(true)
    try {
      const response = await api.get('/Livros', {
        params: {
          ...filter,
        },
      })

      setList(response.data.items)
      setTotalCount(response.data.totalCount)

      const numberOfPages = Math.max(
        parseInt(response.data.totalCount / filter.MaxResultCount),
        0
      )
      setPages(numberOfPages > 1 ? numberOfPages : 1)
      setLoading(false)
    } catch (err) {
      toast.error(err.message || 'Ops! Erro inesperado')
      setList([])
      setTotalCount(0)
      setPages(1)
      setLoading(false)
    }
  }, [filter])

  /**
   * USE EFFECT
   */
  useEffect(() => {
    handleFindList()
  }, [handleFindList])

  useEffect(() => {
    if (callbackDialog && callbackDialog.success)
      if (callbackDialog.success.action === 'success' && selected) {
        setList(list.filter((c) => c.id !== selected.id))
      }
  }, [callbackDialog])

  return (
    <Container>
      <Header handleFilterSubmit={handleFilterSearch} />
      <Filter total={totalCount} handleFilterSubmit={handleFilterData} />
      <Card height="full" padding="15px">
        <Pagination
          total={pages}
          activePage={page}
          onClick={handleCalcPaginate}
        />
        <Scroll height="calc(100vh - 300px)">
          {loading ? (
            <Loader />
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>LIVRO</th>
                  <th>AUTOR</th>
                  <th>EDITORA</th>
                  <th>ANO</th>
                  <th>
                    <Align align="right">AÇÕES</Align>
                  </th>
                </tr>
              </thead>
              <tbody>
                {!!list &&
                  list.length > 0 &&
                  list.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <p>{item.titulo}</p>
                        <span>{item.isbn}</span>
                      </td>
                      <td>{item.autor}</td>
                      <td>{item.editora}</td>
                      <td>{item.ano}</td>
                      <td>
                        <Align align="right">
                          <Button
                            fill="true"
                            color="font"
                            round="true"
                            onClick={() => handleShowBook(item.id)}
                            id={`id_button_view_${item.id}`}
                          >
                            <FiEye />
                          </Button>
                          <Tooltip target={`id_button_view_${item.id}`}>
                            Visualizar dados
                          </Tooltip>
                          <Button
                            fill="true"
                            color="font"
                            round="true"
                            onClick={() => handleDelete(item)}
                            id={`id_button_delete_${item.id}`}
                          >
                            <FiTrash2 />
                          </Button>
                          <Tooltip target={`id_button_delete_${item.id}`}>
                            Deletar
                          </Tooltip>
                        </Align>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          )}
        </Scroll>
      </Card>
    </Container>
  )
}

export default Biblioteca
