var widthOfBinaryTree = function (root) {
  if (!root) return 0
  const queue = [[root, 0]]
  let layerCnt = 1
  let width = 0
  while (queue.length > 0) {
    let currentLayerCnt = 0
    let minIndex = queue[0][1]
    let maxIndex = queue[queue.length - 1][1]
    width = Math.max(width, maxIndex - minIndex + 1)
    for (let i = 0; i < layerCnt; i++) {
      const [node, index] = queue.shift()
      if (node.left) {
        currentLayerCnt++
        queue.push([node.left, 2 * index-minIndex])
      }
      if (node.right) {
        currentLayerCnt++
        queue.push([node.right, 2 * index + 1-minIndex])
      }
    }
    layerCnt = currentLayerCnt
  }
  return width
};