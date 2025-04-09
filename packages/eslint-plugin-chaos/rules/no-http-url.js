const RULE_NAME = 'no-http-url';

module.exports = {
  name: RULE_NAME,
  // 基本格式
  meta: {
    type: 'suggestion', // 报错级别，建议级别
    fixable: null, // 是否进行自动修复处理
    // 报错提示，定义集，在下面可以直接使用
    messages: {
      noHttpUrl: 'Recommended "{{url}}" switch to HTTPS',
    },
  },
  create(context) {
    return {
      // visitor模式
      // 字面量 vistor
      // 入参 当前匹配的节点
      Literal: function handleRequires(node) {
        if (node.value && typeof node.value === 'string' && node.value.indexOf('http:') === 0) {
          context.report({
            node,
            messageId: 'noHttpUrl',
            data: {
              url: node.value,
            },
          });
        }
      },
    };
  },
};
