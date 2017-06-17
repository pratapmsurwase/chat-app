var expect = require('expect');
var {generateMessage} = require('./message');

  describe('messgeGenerate' ,  ()  => {
    it('should be generate  correct message object',  ()  =>  {
      var from = 'Jen';
      var  text = 'Message from text';
      var message = generateMessage(from,   text);
      expect(message.createdAt).toBeA('number');
      expect(message).toInclude({from,   text});
    });
  });
