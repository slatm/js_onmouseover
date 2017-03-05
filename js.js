/**
 * Created by a on 2017/3/4.
 */
window.onload = function ()
{
    var oLi = document.getElementsByTagName("li");
    for (var i = 0; i < oLi.length; i++)
    {
        oLi[i].onmouseover = function ()
        {
            this.className = "current"
        };
        oLi[i].onmouseout = function ()
        {
            this.className = ""
        }
    }
}

