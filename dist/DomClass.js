function find (str) {
  return document.querySelector(str);
}
function findAll (str) {
  return document.querySelectorAll(str);
}
let Dom = {
  unshiftNode (el, elC) {
    el.insertBefore(elC, el.firstChild);
  },
  pushNode (el, elC) {
    el.appendChild(elC);
  },
  appendChild (el, newNode) {
    el.appendChild(newNode);
  },
  removeEventListener (el, str, fn) {
    el.removeEventListener(str, fn);
  },
  addEventListener (el, str, callBack) {
    el['fn' + new Date().getTime()] = function (event) {
      callBack(event)
    };
    el.addEventListener(str, el['fn' + new Date().getTime()]);
    return el['fn' + new Date().getTime()]
  },
  addClass (el, str) {
    el.className += ` ${str}`;
  },
  removeClass (el, str) {
    el.className = el.className.replace(str, '');
  },
  remove (el) {
    el.parentNode.removeChild(el);
  },
  hide (el) {
    el.style.display = 'none';
  },
  show (el) {
    el.style.display = 'block';
  },
  removeAttribute (el, str) {
    el.removeAttribute(str);
  },
  getAttribute (el, str) {
    return el.getAttribute(str);
  },
  setAttribute (el, str, data) {
    el.setAttribute(str, data);
  },
  offset(el) {
    let {scrollX, scrollY} = window;
    // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
    // Support: IE <=11 only
    // Running getBoundingClientRect on a
    // disconnected node in IE throws an error
    if (!el.getClientRects().length) {
      return { top: 0, left: 0 };
    }
    // Get document-relative position by adding viewport scroll to viewport-relative gBCR
    let rect = el.getBoundingClientRect();
    let win = el.ownerDocument.defaultView;
    return {
      top: rect.top + win.pageYOffset - scrollY,
      left: rect.left + win.pageXOffset - scrollX
    };
  }
}

class DomClass {
  constructor (str) {
    this.$el = this.$(str);

    let keys = Object.keys(Dom);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      this[key] = (...arr) => {
        arr.unshift(this.$el); // [this.$el, ...arr]
        // Dom[key].apply(this, arr)
        let res = Dom[key].apply(this, arr);
        return res === void (0) ? this : res;
      }
    }
  }
  isEl (el) {
    if (el && el.nodeType) {
      return true
    }
    return false;
  }
  $ (el) {
    return this.isEl(el) ? el : this.$el || find(el);
  }
}
