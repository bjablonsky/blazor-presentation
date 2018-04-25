using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorQuick.Client
{
    public static class CSharpInterop
    {
        public static string Shape(string s)
        {
            if(s.Equals("square"))
            {
                return "Your shape has 4 sides";
            }
            else if (s.Equals("triangle"))
            {
                return "Your shape has 3 sides";
            }
            else
            {
                return "I'm not sure how many sides your shape has";
            }
        }
    }
}
