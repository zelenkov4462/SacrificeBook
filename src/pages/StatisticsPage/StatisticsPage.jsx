import React from "react";
import ListOfPages from "../../components/ListofPages/ListofPages";
import WalletId from "../../components/WalletId/WalletId";
import AppHeader from "../../components/app-header";
import Footer from "../../components/footer";
import EmptyPlace from "../../components/EmptyPlace/EmptyPlace";

import styled from 'styled-components'
import { useTable, useBlockLayout, useResizeColumns } from 'react-table'
import useStore from "../../hooks/useStore/useStore";
import useAsyncEffect from "../../hooks/useAsyncEffect/useAsyncEffect";
import MetaMaskController from "../../utils/MetaMaskController/MetaMaskController";
import {useParams} from "react-router";
import {observer} from "mobx-react-lite";

const Styles = styled.div`
  padding: 1rem;

  .table {
    display: inline-block;
    border-spacing: 0;
    border: 1px solid black;
    font-size: 15px;
     font-weight: bold;
     

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }
    
    .tr:nth-child(odd) {
        background-color: #DCDCDC ;
}

    .tr:nth-child(even) {
        background-color: white;
    }
    
    .th {
        background-color: rgba(0,0,0,.3) ;
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      overflow: hidden;
      
     
      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;

      :last-child {
        border-right: 0;
      }

      .resizer {
        display: inline-block;
        background: none;
        width: 10px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;
        ${'' /* prevents from scrolling while dragging on touch devices */}
        touch-action:none;
        

        &.isResizing {
          background: black;
        }
      }
    }
  }
`

function Table({ columns, data }) {
    const defaultColumn = React.useMemo(
        () => ({
            minWidth: 30,
            width: 150,
            maxWidth: 400,
        }),
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        resetResizing,
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
        },
        useBlockLayout,
        useResizeColumns
    )

    return (
        <>
            {/*<button onClick={resetResizing}>Reset Resizing</button>*/}
            <div>
                <div {...getTableProps()} className="table">
                    <div>
                        {headerGroups.map(headerGroup => (
                            <div {...headerGroup.getHeaderGroupProps()} className="tr">
                                {headerGroup.headers.map(column => (
                                    <div {...column.getHeaderProps()} className="th">
                                        {column.render('Header')}
                                        {/* Use column.getResizerProps to hook up the events correctly */}
                                        <div
                                            {...column.getResizerProps()}
                                            className={`resizer ${
                                                column.isResizing ? 'isResizing' : ''
                                            }`}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row)
                            return (
                                <div {...row.getRowProps()} className="tr">
                                    {row.cells.map(cell => {
                                        return (
                                            <div {...cell.getCellProps()} className="td">
                                                {cell.render('Cell')}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}


const StatisticsPage = () => {

    const {dataAddress} = useParams();

    const { UserCredentials } = useStore();

    useAsyncEffect(async () => {
        // if (dataAddress) {
            const {address, balance} = await MetaMaskController.getAddressAndBalance();
            UserCredentials.setAddress(address);
            UserCredentials.setBalance(balance);

        }, [])

    async function onChangeAccount ()  {
        await MetaMaskController.changeAccount();
    }



    const data = React.useMemo(
        () => [
            {
                col1: '1',
                col2: '0x98685c69887',
                col3: '100 ETH',
                col4: '6x',
                col5: '(i)',
            },
            {
                col1: '2',
                col2: '0x98685c69887',
                col3: '100 ETH',
                col4: '3x',
                col5: '(i)',
            },
            {
                col1: '3',
                col2: '0x98685c69887',
                col3: '100 ETH',
                col4: '6x',
                col5: '(i)',
            },
            {
                col1: '4',
                col2: '0x98685c69887',
                col3: '100 ETH',
                col4: '6x',
                col5: '(i)',
            },
            {
                col1: '5',
                col2: '0x98685c69887',
                col3: '100 ETH',
                col4: '3x',
                col5: '(i)',
            },
            {
                col1: '6',
                col2: '0x98685c69887',
                col3: '100 ETH',
                col4: '6x',
                col5: '(i)',
            },
            {
                col1: '7',
                col2: '0x98685c69887',
                col3: '100 ETH',
                col4: '2x',
                col5: '(i)',
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Rank',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Address',
                accessor: 'col2',
            },
            {
                Header: 'Sacrifice',
                accessor: 'col3',
            },
            {
                Header: 'Multiplier',
                accessor: 'col4',
            },
            {
                Header: 'Transaction',
                accessor: 'col5',
            },
        ],
        []
    )


    return (
        <div>
            <ListOfPages/>
            <WalletId id={UserCredentials.address}/>
            <AppHeader/>
            <Styles>
                <Table columns={columns} data={data} />
            </Styles>
            <EmptyPlace/>
            <Footer/>
        </div>
    )
}
export default observer(StatisticsPage);