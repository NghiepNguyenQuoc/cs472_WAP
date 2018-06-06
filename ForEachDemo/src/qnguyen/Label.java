package qnguyen;


import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;

public class Label extends SimpleTagSupport {
    String color;
    String text;

    //This is called from JSP servlet to render custom tag
    public void doTag() throws JspException, IOException {
        JspWriter out = getJspContext().getOut();
        if (color != null)
            out.write(String.format("<span style='color:%s'>%s</span>", color, text));
        else
            out.write(String.format("<span>%s</span>", text));
    }

    //Need a setter for each attribute of custom tag


    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}