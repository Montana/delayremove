<img src="http://www.montanamendy.com/deer256.png">

### DelayRemove

A simple plugin to animate out a DOM element after a short delay and then remove from DOM once animation is done.

### Usage

```Java
  $('p.flash-msg').delay_remove()
  ```

  This will call slideUp() and remove() after 2 seconds. Below, the delay is in milliseconds, and is called after slideUp() is complete.
 ```Java
  $('p.flash-msg').delay_remove({
    delay: 1000 
    speed: 'slow'
    callback: function() {
      alert('all done');
    }
  })
```

### Questions 

If you have any questions please email me at montana@getprowl.com. Written by <a href="http://www.montanamendy.com">Montana Mendy</a>.
