(function () {
      var container = document.getElementById('dots');
      for (var i = 0; i < 30; i++) {
        var dot = document.createElement('span');
        dot.className = 'dot';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.animationDuration = (8 + Math.random() * 12) + 's';
        dot.style.animationDelay = -(Math.random() * 20) + 's';
        dot.style.width = dot.style.height = (2 + Math.random() * 3) + 'px';
        container.appendChild(dot);
      }
    })();