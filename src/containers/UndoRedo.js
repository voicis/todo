import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button
      onClick={onUndo}
      disabled={!canUndo}
      className="btn btn-primary mx-sm-3 mb-2"
    >
      Undo
    </button>
    <button
      onClick={onRedo}
      disabled={!canRedo}
      className="btn btn-primary mb-2"
    >
      Redo
    </button>
  </p>
)

const mapStateToProps = state => ({
  canUndo: state.todos.past.length > 0,
  canRedo: state.todos.future.length > 0
})

const mapDispatchToProps = {
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
}

UndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo)

export default UndoRedo
