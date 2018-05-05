export const SEL_NODENAME = 'SEL_NODENAME'
export const SEL_NODETYPE = 'SEL_NODETYPE'
export const SEL_LINETYPE = 'SEL_LINETYPE'
export const UPDATE_NODECONTENT = 'UPDATE_NODECONTENT'
export const UPDATE_NODECOORDINATE = 'UPDATE_NODECOORDINATE'
export const UPDATE_NODE = 'UPDATE_NODE'
export const UPDATE_LINE = 'UPDATE_LINE'
export const UPDATE_DRAWSTYLE = 'UPDATE_DRAWSTYLE'
export const UNDO = 'UNDO'
export const REDO = 'REDO'
export const UPDATE_HISTORY = 'UPDATE_HISTORY'
export const UPDATE_HISTORYINDEX = 'UPDATE_HISTORYINDEX'

const store = {
  namespaced: true,
  state: {
    // 选中图形名称
    nodeName: '',
    nodeCoordinate: {},
    // 当前选中节点类型
    nodeContent: '',
    selNodeType: '',
    // 节点数据
    nodeData: {},
    // 连线数据
    lineData: {},
    // 画布样式
    drawStyle: {
      zoomRate: 1 // 全局缩放比例
    },
    selLineType: 'Mouse',
    historyLength: 0,
    historyIndex: 0
  },
  mutations: {
    // 选中图形名称
    [SEL_NODENAME] (state, value = '') {
      state.nodeName = value
    },
    // 选中节点类型
    [SEL_NODETYPE] (state, value = '') {
      state.selNodeType = value
    },
    // 选中线条类型
    [SEL_LINETYPE] (state, value = '') {
      state.selLineType = value
    },
    // 选中节点坐标
    [UPDATE_NODECOORDINATE](state, value = {}) {
      state.nodeCoordinate = value
    },
    // 选中节点内容
    [UPDATE_NODECONTENT](state, value = '') {
      // let result = value.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');
      state.nodeContent = value;
    },
    // 修改画布大小位置等
    [UPDATE_DRAWSTYLE] (state, value) {
      state.drawStyle = {
        ...state.drawStyle,
        ...value
      }
    },
    [UPDATE_NODE] (state, value) {
      state.nodeData = {
        ...state.nodeData,
        ...value
      }
    },
    [UPDATE_LINE] (state, value) {
      state.lineData = {
        ...state.lineData,
        ...value
      }
    },
    [UPDATE_HISTORY] (state, value) {
      state.historyLength = value
    },
    [UPDATE_HISTORYINDEX] (state, value) {
      state.historyIndex = value
    },
    [UNDO] (state, value = 0) {
    },
    [REDO] (state, value = 0) {
    }
  },
  actions: {

  }
}

export default store
