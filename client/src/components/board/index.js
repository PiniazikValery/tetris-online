import React from 'react';
import config from '../../config';
import { connect } from 'react-redux';
import { cloneDeep } from 'lodash';
import { clearRows } from '../../actions';
import { bindActionCreators } from 'redux';
import Cell from '../cell';
import { BoardArea } from './styles';

const Board = ({ cells, currentTetromino, clearRows }) => {
    const Cells = () => {
        return mergeCellsWithCurrentTetromino().map((row, rowIndex) => row.map((cell, cellIndex) => <Cell onClick={() => { clearRows(rowIndex, 1) }} key={rowIndex * 10 + cellIndex} color={cell && config.COLORS[cell]} />));
    }

    const mergeCellsWithCurrentTetromino = () => {
        let resultCells = cloneDeep(cells);
        for (let y = 0; y < currentTetromino.shape.length; y++) {
            for (let x = 0; x < currentTetromino.shape[y].length; x++) {
                if (currentTetromino.shape[y][x]) {
                    if (
                        y + currentTetromino.y >= 0 &&
                        y + currentTetromino.y < config.ROWS &&
                        x + currentTetromino.x >= 0 &&
                        x + currentTetromino.x < config.COLS
                    )
                        resultCells[y + currentTetromino.y][x + currentTetromino.x] = currentTetromino.shape[y][x];
                }
            }
        }
        return resultCells;
    }

    return (
        <BoardArea>
            <Cells />
        </BoardArea>
    );
};

const mapStateToProps = state => ({
    cells: state.cells,
    currentTetromino: state.currentTetromino
});

const mapDispatchToProps = dispatch => ({
    clearRows: bindActionCreators(clearRows, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
