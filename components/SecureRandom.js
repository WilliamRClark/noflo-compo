var noflo;

noflo = require('noflo');

exports.getComponent = function() {
  var c;
  c = new noflo.Component({
    icon: 'random',
    description: 'Generate a secure random number between 0 and 1',
    inPorts: {
      in: {
        datatype: 'bang'
      }
    },
    outPorts: {
      out: {
        datatype: 'number'
      }
    }
  });
  return c.process(function(input, output) {
    if (!input.hasData('in')) {
      return;
    }
    input.getData('in');
    let random = ()=> crypto.getRandomValues(new Uint32Array(1))[0]/2**32;
    return output.sendDone(random);
  });
};
