//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace StoreManagement.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Mystock
    {
        public int PId { get; set; }
        public string Userid { get; set; }
        public string Pname { get; set; }
        public Nullable<int> Pcount { get; set; }
        public string Pquality { get; set; }
        public Nullable<System.DateTime> Mdate { get; set; }
        public Nullable<System.DateTime> Edate { get; set; }
        public Nullable<double> Price { get; set; }
    }
}
