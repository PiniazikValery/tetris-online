import React from 'react';
import { connect } from 'react-redux';
import { clearCells, clearRows } from '../../actions';
import { bindActionCreators } from 'redux';
import Cell from '../cell';
import { BoardArea } from './styles';

const Board = ({ cells, clearRows }) => {
    const Cells = () => {
        return cells.map((row, rowIndex) => row.map((cell, cellIndex) => <Cell onClick={() => { clearRows(rowIndex, 1) }} key={rowIndex * 10 + cellIndex} color={cell && 'red'} />));
    }

    return (
        <BoardArea>
            <Cells />
        </BoardArea>
    );
};

const mapStateToProps = state => ({
    cells: state.cells
});

const mapDispatchToProps = dispatch => ({
    clearCells: bindActionCreators(clearCells, dispatch),
    clearRows: bindActionCreators(clearRows, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
